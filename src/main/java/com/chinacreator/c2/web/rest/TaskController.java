package com.chinacreator.c2.web.rest;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import org.apache.commons.lang.StringUtils;
import org.springframework.stereotype.Controller;

import com.alibaba.fastjson.JSON;
import com.chinacreator.c2.Task;
import com.chinacreator.c2.dao.DaoFactory;
import com.chinacreator.c2.dao.mybatis.enhance.Conditions;
import com.chinacreator.c2.dao.mybatis.enhance.Page;
import com.chinacreator.c2.dao.mybatis.enhance.Pageable;
import com.chinacreator.c2.dao.mybatis.enhance.Sortable;
import com.chinacreator.c2.web.util.ConditionsUtil;
import com.chinacreator.c2.web.util.SortableUtil;

@Controller
@Path("task")
@Consumes(MediaType.APPLICATION_JSON)
public class TaskController {

	@DELETE
	@Path("/{id}")
	public void delete(@PathParam(value = "id") java.lang.String id) {
		//TODO auto-generated method stub
		Task entity = new Task();
		entity.setId(id);
		DaoFactory.create(Task.class).delete(entity);
	}

	@DELETE
	@Path("")
	public void deleteBatch(@QueryParam(value = "id") List<java.lang.String> ids) {
		//TODO auto-generated method stub
		DaoFactory.create(Task.class).deleteBatch(ids);
	}

	@GET
	@Path("/{id}")
	public Task get(@PathParam(value = "id") java.lang.String id) {
		//TODO auto-generated method stub
		return DaoFactory.create(Task.class).selectByID(id);
	}

	@POST
	@Path("")
	public Task insert(Task entity) {
		//TODO auto-generated method stub	
		DaoFactory.create(Task.class).insert(entity);
		return entity;
	}

	@POST
	@Path("/{id}")
	public Task update(Task entity) {
		//TODO auto-generated method stub	
		DaoFactory.create(Task.class).update(entity);
		return entity;
	}

	@GET
	@Path("")
	public Page<Task> getListByPage(@QueryParam(value = "page") int page, @QueryParam(value = "rows") int rows,
			@QueryParam(value = "sidx") String sidx, @QueryParam(value = "sord") String sord,
			@QueryParam(value = "cond") String cond) {
		//TODO auto-generated method stub
		//创建分页对象
		Pageable pageable = new Pageable(page, rows);
		//创建排序对象
		Sortable sortable = SortableUtil.getSortable(sidx, sord);
		/*创建高级查询对象*/
		Conditions conditions = ConditionsUtil.getConditions(cond, "filters");
		/*初始化实体对象*/
		Task entity = StringUtils.isNotBlank(cond) ? JSON.parseObject(cond, Task.class) : new Task();

		return DaoFactory.create(Task.class).selectPageByCondition(entity, conditions, pageable, sortable, true);

	}
}
