export interface InfoVO {
  /**
   * 
   */
  id: string | number;

  /**
   * 研报标题
   */
  title: string;

  /**
   * 报告类型
   */
  reportType: string;

  /**
   * 品种分类
   */
  varietyType: string;

  /**
   * 上传PDF的URL
   */
  pdfUrl: string;

  /**
   * 访问权限（如：公开/内部/部门内）
   */
  accessLevel: string;

  /**
   * 展示平台ID
   */
  platformId: string | number;

  /**
   * 是否关联微信公众号（0-否，1-是）
   */
  wechatPub: number;

  /**
   * 是否已备案公共媒体（0-否，1-是）
   */
  publicMedia: number;

  /**
   * 是否已签约直播软件（0-否，1-是）
   */
  liveSoftware: number;

  /**
   * 第三方合作渠道
   */
  thirdParty: string;

  /**
   * 上传人ID
   */
  uploaderId: string | number;

  /**
   * 所属部门ID
   */
  departmentId: string | number;

  /**
   * 上传时间
   */
  uploadTime: string;

  /**
   * 审批状态（0-待提交，1-待审批，2-已通过，3-驳回）
   */
  approveStatus: number;

  /**
   * 上架状态（0-未上架，1-已上架）
   */
  publishStatus: number;

  /**
   * 点击量
   */
  clickCount: number;

  /**
   * 创建时间
   */
  createdTime: string;

  /**
   * 更新时间
   */
  updatedTime: string;

  /**
   * AI生成的研报摘要
   */
  aiSummary: string;

  /**
   * 富文本内容（支持HTML或Markdown格式）
   */
  richContent: string;

  /**
   * 咨询证号
   */
  consultationNo: string;

}

export interface InfoForm extends BaseEntity {
  /**
   * 
   */
  id?: string | number;

  /**
   * 研报标题
   */
  title?: string;

  /**
   * 报告类型
   */
  reportType?: string;

  /**
   * 品种分类
   */
  varietyType?: string;

  /**
   * 上传PDF的URL
   */
  pdfUrl?: string;

  /**
   * 访问权限（如：公开/内部/部门内）
   */
  accessLevel?: string;

  /**
   * 展示平台ID
   */
  platformId?: string | number;

  /**
   * 是否关联微信公众号（0-否，1-是）
   */
  wechatPub?: number;

  /**
   * 是否已备案公共媒体（0-否，1-是）
   */
  publicMedia?: number;

  /**
   * 是否已签约直播软件（0-否，1-是）
   */
  liveSoftware?: number;

  /**
   * 第三方合作渠道
   */
  thirdParty?: string;

  /**
   * 上传人ID
   */
  uploaderId?: string | number;

  /**
   * 所属部门ID
   */
  departmentId?: string | number;

  /**
   * 上传时间
   */
  uploadTime?: string;

  /**
   * 审批状态（0-待提交，1-待审批，2-已通过，3-驳回）
   */
  approveStatus?: number;

  /**
   * 上架状态（0-未上架，1-已上架）
   */
  publishStatus?: number;

  /**
   * 点击量
   */
  clickCount?: number;

  /**
   * 创建时间
   */
  createdTime?: string;

  /**
   * 更新时间
   */
  updatedTime?: string;

  /**
   * AI生成的研报摘要
   */
  aiSummary?: string;

  /**
   * 富文本内容（支持HTML或Markdown格式）
   */
  richContent?: string;

  /**
   * 咨询证号
   */
  consultationNo?: string;

}

export interface InfoQuery extends PageQuery {

  /**
   * 研报标题
   */
  title?: string;

  /**
   * 报告类型
   */
  reportType?: string;

  /**
   * 品种分类
   */
  varietyType?: string;

  /**
   * 上传PDF的URL
   */
  pdfUrl?: string;

  /**
   * 访问权限（如：公开/内部/部门内）
   */
  accessLevel?: string;

  /**
   * 展示平台ID
   */
  platformId?: string | number;

  /**
   * 是否关联微信公众号（0-否，1-是）
   */
  wechatPub?: number;

  /**
   * 是否已备案公共媒体（0-否，1-是）
   */
  publicMedia?: number;

  /**
   * 是否已签约直播软件（0-否，1-是）
   */
  liveSoftware?: number;

  /**
   * 第三方合作渠道
   */
  thirdParty?: string;

  /**
   * 上传人ID
   */
  uploaderId?: string | number;

  /**
   * 所属部门ID
   */
  departmentId?: string | number;

  /**
   * 上传时间
   */
  uploadTime?: string;

  /**
   * 审批状态（0-待提交，1-待审批，2-已通过，3-驳回）
   */
  approveStatus?: number;

  /**
   * 上架状态（0-未上架，1-已上架）
   */
  publishStatus?: number;

  /**
   * 点击量
   */
  clickCount?: number;

  /**
   * 创建时间
   */
  createdTime?: string;

  /**
   * 更新时间
   */
  updatedTime?: string;

  /**
   * AI生成的研报摘要
   */
  aiSummary?: string;

  /**
   * 富文本内容（支持HTML或Markdown格式）
   */
  richContent?: string;

  /**
   * 咨询证号
   */
  consultationNo?: string;

    /**
     * 日期范围参数
     */
    params?: any;
}



