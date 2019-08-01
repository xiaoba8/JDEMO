package com.chinacreator.self;




import java.sql.Date;

import com.chinacreator.c2.Task;
import com.chinacreator.c2.dao.Dao;
import com.chinacreator.c2.dao.DaoFactory;

public class StatisticTotal {
    public int countTotalTask() {
        Dao<Task> dao = DaoFactory.create(Task.class);
        return dao.count(new Task());
     }
    public int countFinishedTask() {
        Dao<Task> dao = DaoFactory.create(Task.class);
        Task condition=new Task();
        condition.setYear(new Date(System.currentTimeMillis()));
        return dao.count(condition);
    } 
}
