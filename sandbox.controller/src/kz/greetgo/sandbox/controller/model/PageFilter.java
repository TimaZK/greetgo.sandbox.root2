package kz.greetgo.sandbox.controller.model;

public class PageFilter {
  public String filterName;
  public String sortName;
  public String direction;
  public int pageSize;
  public int pageNumber;

  public String getFilterName() {
    return filterName;
  }

  public void setFilterName(String filterName) {
    this.filterName = filterName;
  }

  public String getSortName() {
    return sortName;
  }

  public void setSortName(String sortName) {
    this.sortName = sortName;
  }

  public String getDirection() {
    return direction;
  }

  public void setDirection(String direction) {
    this.direction = direction;
  }

  public int getPageSize() {
    return pageSize;
  }

  public void setPageSize(int pageSize) {
    this.pageSize = pageSize;
  }

  public int getPageNumber() {
    return pageNumber;
  }

  public void setPageNumber(int pageNumber) {
    this.pageNumber = pageNumber;
  }

  public PageFilter(String filterName, String sortName, String direction, int pageSize, int pageNumber) {
    this.filterName = filterName;
    this.sortName = sortName;
    this.direction = direction;
    this.pageSize = pageSize;
    this.pageNumber = pageNumber;
  }

  public PageFilter() {
  }
}
