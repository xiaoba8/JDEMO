
package com.chinacreator.c2;

import com.chinacreator.c2.annotation.Column;
import com.chinacreator.c2.annotation.ColumnType;
import com.chinacreator.c2.annotation.Entity;

/**
 * 任务
 * @author 
 * @generated
 */
@Entity(id = "entity:com.chinacreator.c2.Task", table = "E_TASK", ds = "1", cache = false)
public class Task {
	/**
	*id
	*/
	@Column(id = "id", type = ColumnType.uuid, datatype = "string64")
	private java.lang.String id;

	/**
	*name
	*/
	@Column(id = "project_id", datatype = "string64")
	private java.lang.String projectId;

	/**
	*year
	*/
	@Column(id = "year", datatype = "date")
	private java.sql.Date year;

	/**
	* 设置id
	*/
	public void setId(java.lang.String id) {
		this.id = id;
	}

	/**
	* 获取id
	*/
	public java.lang.String getId() {
		return id;
	}

	/**
	* 设置name
	*/
	public void setProjectId(java.lang.String projectId) {
		this.projectId = projectId;
	}

	/**
	* 获取name
	*/
	public java.lang.String getProjectId() {
		return projectId;
	}

	/**
	* 设置year
	*/
	public void setYear(java.sql.Date year) {
		this.year = year;
	}

	/**
	* 获取year
	*/
	public java.sql.Date getYear() {
		return year;
	}
}
