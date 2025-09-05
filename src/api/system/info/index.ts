import request from '@/utils/request';
import { AxiosPromise } from 'axios';
import { InfoVO, InfoForm, InfoQuery } from '@/api/system/info/types';

/**
 * 查询研报信息列表
 * @param query
 * @returns {*}
 */

export const listInfo = (query?: InfoQuery): AxiosPromise<InfoVO[]> => {
  return request({
    url: '/system/info/list',
    method: 'get',
    params: query
  });
};

/**
 * 查询研报信息详细
 * @param id
 */
export const getInfo = (id: string | number): AxiosPromise<InfoVO> => {
  return request({
    url: '/system/info/' + id,
    method: 'get'
  });
};

/**
 * 新增研报信息
 * @param data
 */
export const addInfo = (data: InfoForm) => {
  return request({
    url: '/system/info',
    method: 'post',
    data: data
  });
};

/**
 * 修改研报信息
 * @param data
 */
export const updateInfo = (data: InfoForm) => {
  return request({
    url: '/system/info',
    method: 'put',
    data: data
  });
};

/**
 * 删除研报信息
 * @param id
 */
export const delInfo = (id: string | number | Array<string | number>) => {
  return request({
    url: '/system/info/' + id,
    method: 'delete'
  });
};
