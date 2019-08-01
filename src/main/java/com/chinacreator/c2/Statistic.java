package com.chinacreator.c2;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;

import com.chinacreator.c2.dao.Dao;
import com.chinacreator.c2.dao.DaoFactory;
import com.chinacreator.c2.module.echart.BarSerie;
import com.chinacreator.c2.module.echart.EChartsData;
import com.chinacreator.c2.module.echart.Serie;

public class Statistic {
    public EChartsData getSerieObj(String startDate, String endDate) throws ParseException {
        // TODO Auto-generated method stub
        //设置起止日期
        SimpleDateFormat format1 = new SimpleDateFormat("yyyy-MM-dd");
        Date date1;
        Date date2;
        //把前台两个控件中的时间字符串转换为Date类型
        Date begin = new Date(Long.valueOf(String.valueOf(startDate)));
        Date end = new Date(Long.valueOf(String.valueOf(endDate)));

        //起止日期如果为空，则设置默认值
        if(startDate!=null)
            date1=begin;
        else
            date1 = format1.parse("1970-01-01");

        if(endDate!=null)
            date2=end;
        else
            date2 = format1.parse("2099-10-10");

        //设置查询条件（条件放在map中，因为sql语句中我们的参数是map类型）
        Map<String, Date> interal = new HashMap<String, Date>();
        interal.put("endDate1", date1);
        interal.put("endDate2", date2);

        Dao<Task> dao = DaoFactory.create(Task.class);
        SqlSession session = dao.getSession();

        //调用自定义sql获得查询结果
        List<Object>  tasks=session.selectList("com.chinacreator.c2.TaskMapper.countByDate", interal);
        Iterator<Object> taskst=tasks.iterator();
        //我们这里用到的是<日期，完成的任务数>，定义临时task获取taskst中的每一项结果
        Map<java.sql.Date, Integer> task = new HashMap<java.sql.Date, Integer>();

        int length=tasks.size();
        //定义echarts图表用到的数据（横坐标和坐标中的数据）
        Object[] xAxis = new Object[length];
        Object[][] data = new Object[1][length];
        int x = 0;

        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        //将每一项taskst中的结果放到echarts图表中，xAxis是横坐标对应的数据，data[][]是坐标对应数据（可以定义多维）
        while (taskst.hasNext()) {
            task = (Map) taskst.next();
			//这里get的字段相对于javabean中要大写，你也可以将上面List<Object>改为List<Task>, 这里调用时可
			//为get[index].getXxx()
            data[0][x] = task.get("COUNT(ID)");
            xAxis[x] = sdf.format(task.get("YEAR"));
            x++;
        }
       //设置echarts的图例名字
        String[] legendName = { "任务数量" };

        //实例化柱状图（长度是echarts展示的数据项，这里是任务数，只一项；比如同时展示<身高,体重>，  长度就是2了）
        Serie[] barSeries = new BarSerie[data.length];
        //设置对应坐标的数据
        for (int i = 0; i < data.length; i++) {
            barSeries[i] = new BarSerie(legendName[i]);
            barSeries[i].setData(data[i]);
            ((BarSerie) barSeries[i]).setStack(null);
            ((BarSerie) barSeries[i]).setxAxisIndex(0);
            ((BarSerie) barSeries[i]).setyAxisIndex(0);
        }
        EChartsData echartData = new EChartsData(xAxis, barSeries);
        return echartData;
    }
}
