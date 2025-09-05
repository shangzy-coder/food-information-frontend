<template>
  <div class="p-2">
    <transition :enter-active-class="proxy?.animate.searchAnimate.enter" :leave-active-class="proxy?.animate.searchAnimate.leave">
      <div v-show="showSearch" class="mb-[10px]">
        <el-card shadow="hover">
          <el-form ref="queryFormRef" :model="queryParams" :inline="true">
            <el-form-item label="研报标题" prop="title">
              <el-input v-model="queryParams.title" placeholder="请输入研报标题" clearable @keyup.enter="handleQuery" />
            </el-form-item>
            <el-form-item label="上传PDF的URL" prop="pdfUrl">
              <el-input v-model="queryParams.pdfUrl" placeholder="请输入上传PDF的URL" clearable @keyup.enter="handleQuery" />
            </el-form-item>
            <el-form-item label="访问权限" prop="accessLevel">
              <el-input v-model="queryParams.accessLevel" placeholder="请输入访问权限" clearable @keyup.enter="handleQuery" />
            </el-form-item>
            <el-form-item label="展示平台ID" prop="platformId">
              <el-input v-model="queryParams.platformId" placeholder="请输入展示平台ID" clearable @keyup.enter="handleQuery" />
            </el-form-item>
            <el-form-item label="是否关联微信公众号" prop="wechatPub">
              <el-input v-model="queryParams.wechatPub" placeholder="请输入是否关联微信公众号" clearable @keyup.enter="handleQuery" />
            </el-form-item>
            <el-form-item label="是否已备案公共媒体" prop="publicMedia">
              <el-input v-model="queryParams.publicMedia" placeholder="请输入是否已备案公共媒体" clearable @keyup.enter="handleQuery" />
            </el-form-item>
            <el-form-item label="是否已签约直播软件" prop="liveSoftware">
              <el-input v-model="queryParams.liveSoftware" placeholder="请输入是否已签约直播软件" clearable @keyup.enter="handleQuery" />
            </el-form-item>
            <el-form-item label="第三方合作渠道" prop="thirdParty">
              <el-input v-model="queryParams.thirdParty" placeholder="请输入第三方合作渠道" clearable @keyup.enter="handleQuery" />
            </el-form-item>
            <el-form-item label="上传人ID" prop="uploaderId">
              <el-input v-model="queryParams.uploaderId" placeholder="请输入上传人ID" clearable @keyup.enter="handleQuery" />
            </el-form-item>
            <el-form-item label="所属部门ID" prop="departmentId">
              <el-input v-model="queryParams.departmentId" placeholder="请输入所属部门ID" clearable @keyup.enter="handleQuery" />
            </el-form-item>
            <el-form-item label="上传时间" prop="uploadTime">
              <el-date-picker clearable
                v-model="queryParams.uploadTime"
                type="date"
                value-format="YYYY-MM-DD"
                placeholder="请选择上传时间"
              />
            </el-form-item>
            <el-form-item label="点击量" prop="clickCount">
              <el-input v-model="queryParams.clickCount" placeholder="请输入点击量" clearable @keyup.enter="handleQuery" />
            </el-form-item>
            <el-form-item label="创建时间" prop="createdTime">
              <el-date-picker clearable
                v-model="queryParams.createdTime"
                type="date"
                value-format="YYYY-MM-DD"
                placeholder="请选择创建时间"
              />
            </el-form-item>
            <el-form-item label="更新时间" prop="updatedTime">
              <el-date-picker clearable
                v-model="queryParams.updatedTime"
                type="date"
                value-format="YYYY-MM-DD"
                placeholder="请选择更新时间"
              />
            </el-form-item>
            <el-form-item label="AI生成的研报摘要" prop="aiSummary">
              <el-input v-model="queryParams.aiSummary" placeholder="请输入AI生成的研报摘要" clearable @keyup.enter="handleQuery" />
            </el-form-item>
            <el-form-item label="咨询证号" prop="consultationNo">
              <el-input v-model="queryParams.consultationNo" placeholder="请输入咨询证号" clearable @keyup.enter="handleQuery" />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" icon="Search" @click="handleQuery">搜索</el-button>
              <el-button icon="Refresh" @click="resetQuery">重置</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </div>
    </transition>

    <el-card shadow="never">
      <template #header>
        <el-row :gutter="10" class="mb8">
          <el-col :span="1.5">
            <el-button type="primary" plain icon="Plus" @click="handleAdd" v-hasPermi="['system:info:add']">新增</el-button>
          </el-col>
          <el-col :span="1.5">
            <el-button type="success" plain icon="Edit" :disabled="single" @click="handleUpdate()" v-hasPermi="['system:info:edit']">修改</el-button>
          </el-col>
          <el-col :span="1.5">
            <el-button type="danger" plain icon="Delete" :disabled="multiple" @click="handleDelete()" v-hasPermi="['system:info:remove']">删除</el-button>
          </el-col>
          <el-col :span="1.5">
            <el-button type="warning" plain icon="Download" @click="handleExport" v-hasPermi="['system:info:export']">导出</el-button>
          </el-col>
          <right-toolbar v-model:showSearch="showSearch" @queryTable="getList"></right-toolbar>
        </el-row>
      </template>

      <el-table v-loading="loading" border :data="infoList" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55" align="center" />
        <el-table-column label="" align="center" prop="id" v-if="true" />
        <el-table-column label="研报标题" align="center" prop="title" />
        <el-table-column label="报告类型" align="center" prop="reportType" />
        <el-table-column label="品种分类" align="center" prop="varietyType" />
        <el-table-column label="上传PDF的URL" align="center" prop="pdfUrl" />
        <el-table-column label="访问权限" align="center" prop="accessLevel" />
        <el-table-column label="展示平台ID" align="center" prop="platformId" />
        <el-table-column label="是否关联微信公众号" align="center" prop="wechatPub" />
        <el-table-column label="是否已备案公共媒体" align="center" prop="publicMedia" />
        <el-table-column label="是否已签约直播软件" align="center" prop="liveSoftware" />
        <el-table-column label="第三方合作渠道" align="center" prop="thirdParty" />
        <el-table-column label="上传人ID" align="center" prop="uploaderId" />
        <el-table-column label="所属部门ID" align="center" prop="departmentId" />
        <el-table-column label="上传时间" align="center" prop="uploadTime" width="180">
          <template #default="scope">
            <span>{{ parseTime(scope.row.uploadTime, '{y}-{m}-{d}') }}</span>
          </template>
        </el-table-column>
        <el-table-column label="审批状态" align="center" prop="approveStatus" />
        <el-table-column label="上架状态" align="center" prop="publishStatus" />
        <el-table-column label="点击量" align="center" prop="clickCount" />
        <el-table-column label="创建时间" align="center" prop="createdTime" width="180">
          <template #default="scope">
            <span>{{ parseTime(scope.row.createdTime, '{y}-{m}-{d}') }}</span>
          </template>
        </el-table-column>
        <el-table-column label="更新时间" align="center" prop="updatedTime" width="180">
          <template #default="scope">
            <span>{{ parseTime(scope.row.updatedTime, '{y}-{m}-{d}') }}</span>
          </template>
        </el-table-column>
        <el-table-column label="AI生成的研报摘要" align="center" prop="aiSummary" />
        <el-table-column label="富文本内容" align="center" prop="richContent" />
        <el-table-column label="咨询证号" align="center" prop="consultationNo" />
        <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
          <template #default="scope">
            <el-tooltip content="修改" placement="top">
              <el-button link type="primary" icon="Edit" @click="handleUpdate(scope.row)" v-hasPermi="['system:info:edit']"></el-button>
            </el-tooltip>
            <el-tooltip content="删除" placement="top">
              <el-button link type="primary" icon="Delete" @click="handleDelete(scope.row)" v-hasPermi="['system:info:remove']"></el-button>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>

      <pagination v-show="total > 0" :total="total" v-model:page="queryParams.pageNum" v-model:limit="queryParams.pageSize" @pagination="getList" />
    </el-card>
    <!-- 添加或修改研报信息对话框 -->
    <el-dialog :title="dialog.title" v-model="dialog.visible" width="500px" append-to-body>
      <el-form ref="infoFormRef" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="研报标题" prop="title">
          <el-input v-model="form.title" placeholder="请输入研报标题" />
        </el-form-item>
        <el-form-item label="上传PDF的URL" prop="pdfUrl">
            <el-input v-model="form.pdfUrl" type="textarea" placeholder="请输入内容" />
        </el-form-item>
        <el-form-item label="访问权限" prop="accessLevel">
          <el-input v-model="form.accessLevel" placeholder="请输入访问权限" />
        </el-form-item>
        <el-form-item label="展示平台ID" prop="platformId">
          <el-input v-model="form.platformId" placeholder="请输入展示平台ID" />
        </el-form-item>
        <el-form-item label="是否关联微信公众号" prop="wechatPub">
          <el-input v-model="form.wechatPub" placeholder="请输入是否关联微信公众号" />
        </el-form-item>
        <el-form-item label="是否已备案公共媒体" prop="publicMedia">
          <el-input v-model="form.publicMedia" placeholder="请输入是否已备案公共媒体" />
        </el-form-item>
        <el-form-item label="是否已签约直播软件" prop="liveSoftware">
          <el-input v-model="form.liveSoftware" placeholder="请输入是否已签约直播软件" />
        </el-form-item>
        <el-form-item label="第三方合作渠道" prop="thirdParty">
          <el-input v-model="form.thirdParty" placeholder="请输入第三方合作渠道" />
        </el-form-item>
        <el-form-item label="上传人ID" prop="uploaderId">
          <el-input v-model="form.uploaderId" placeholder="请输入上传人ID" />
        </el-form-item>
        <el-form-item label="所属部门ID" prop="departmentId">
          <el-input v-model="form.departmentId" placeholder="请输入所属部门ID" />
        </el-form-item>
        <el-form-item label="上传时间" prop="uploadTime">
          <el-date-picker clearable
            v-model="form.uploadTime"
            type="datetime"
            value-format="YYYY-MM-DD HH:mm:ss"
            placeholder="请选择上传时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="点击量" prop="clickCount">
          <el-input v-model="form.clickCount" placeholder="请输入点击量" />
        </el-form-item>
        <el-form-item label="创建时间" prop="createdTime">
          <el-date-picker clearable
            v-model="form.createdTime"
            type="datetime"
            value-format="YYYY-MM-DD HH:mm:ss"
            placeholder="请选择创建时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="更新时间" prop="updatedTime">
          <el-date-picker clearable
            v-model="form.updatedTime"
            type="datetime"
            value-format="YYYY-MM-DD HH:mm:ss"
            placeholder="请选择更新时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="AI生成的研报摘要" prop="aiSummary">
            <el-input v-model="form.aiSummary" type="textarea" placeholder="请输入内容" />
        </el-form-item>
        <el-form-item label="富文本内容">
          <editor v-model="form.richContent" :min-height="192"/>
        </el-form-item>
        <el-form-item label="咨询证号" prop="consultationNo">
          <el-input v-model="form.consultationNo" placeholder="请输入咨询证号" />
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button :loading="buttonLoading" type="primary" @click="submitForm">确 定</el-button>
          <el-button @click="cancel">取 消</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup name="Info" lang="ts">
import { listInfo, getInfo, delInfo, addInfo, updateInfo } from '@/api/system/info';
import { InfoVO, InfoQuery, InfoForm } from '@/api/system/info/types';

const { proxy } = getCurrentInstance() as ComponentInternalInstance;

const infoList = ref<InfoVO[]>([]);
const buttonLoading = ref(false);
const loading = ref(true);
const showSearch = ref(true);
const ids = ref<Array<string | number>>([]);
const single = ref(true);
const multiple = ref(true);
const total = ref(0);

const queryFormRef = ref<ElFormInstance>();
const infoFormRef = ref<ElFormInstance>();

const dialog = reactive<DialogOption>({
  visible: false,
  title: ''
});

const initFormData: InfoForm = {
  id: undefined,
  title: undefined,
  reportType: undefined,
  varietyType: undefined,
  pdfUrl: undefined,
  accessLevel: undefined,
  platformId: undefined,
  wechatPub: undefined,
  publicMedia: undefined,
  liveSoftware: undefined,
  thirdParty: undefined,
  uploaderId: undefined,
  departmentId: undefined,
  uploadTime: undefined,
  approveStatus: undefined,
  publishStatus: undefined,
  clickCount: undefined,
  createdTime: undefined,
  updatedTime: undefined,
  aiSummary: undefined,
  richContent: undefined,
  consultationNo: undefined,
}
const data = reactive<PageData<InfoForm, InfoQuery>>({
  form: {...initFormData},
  queryParams: {
    pageNum: 1,
    pageSize: 10,
    title: undefined,
    reportType: undefined,
    varietyType: undefined,
    pdfUrl: undefined,
    accessLevel: undefined,
    platformId: undefined,
    wechatPub: undefined,
    publicMedia: undefined,
    liveSoftware: undefined,
    thirdParty: undefined,
    uploaderId: undefined,
    departmentId: undefined,
    uploadTime: undefined,
    approveStatus: undefined,
    publishStatus: undefined,
    clickCount: undefined,
    createdTime: undefined,
    updatedTime: undefined,
    aiSummary: undefined,
    richContent: undefined,
    consultationNo: undefined,
    params: {
    }
  },
  rules: {
    thirdParty: [
      { required: true, message: "第三方合作渠道不能为空", trigger: "blur" }
    ],
    aiSummary: [
      { required: true, message: "AI生成的研报摘要不能为空", trigger: "blur" }
    ],
    richContent: [
      { required: true, message: "富文本内容不能为空", trigger: "blur" }
    ],
    consultationNo: [
      { required: true, message: "咨询证号不能为空", trigger: "blur" }
    ],
  }
});

const { queryParams, form, rules } = toRefs(data);

/** 查询研报信息列表 */
const getList = async () => {
  loading.value = true;
  const res = await listInfo(queryParams.value);
  infoList.value = res.rows;
  total.value = res.total;
  loading.value = false;
}

/** 取消按钮 */
const cancel = () => {
  reset();
  dialog.visible = false;
}

/** 表单重置 */
const reset = () => {
  form.value = {...initFormData};
  infoFormRef.value?.resetFields();
}

/** 搜索按钮操作 */
const handleQuery = () => {
  queryParams.value.pageNum = 1;
  getList();
}

/** 重置按钮操作 */
const resetQuery = () => {
  queryFormRef.value?.resetFields();
  handleQuery();
}

/** 多选框选中数据 */
const handleSelectionChange = (selection: InfoVO[]) => {
  ids.value = selection.map(item => item.id);
  single.value = selection.length != 1;
  multiple.value = !selection.length;
}

/** 新增按钮操作 */
const handleAdd = () => {
  reset();
  dialog.visible = true;
  dialog.title = "添加研报信息";
}

/** 修改按钮操作 */
const handleUpdate = async (row?: InfoVO) => {
  reset();
  const _id = row?.id || ids.value[0]
  const res = await getInfo(_id);
  Object.assign(form.value, res.data);
  dialog.visible = true;
  dialog.title = "修改研报信息";
}

/** 提交按钮 */
const submitForm = () => {
  infoFormRef.value?.validate(async (valid: boolean) => {
    if (valid) {
      buttonLoading.value = true;
      if (form.value.id) {
        await updateInfo(form.value).finally(() =>  buttonLoading.value = false);
      } else {
        await addInfo(form.value).finally(() =>  buttonLoading.value = false);
      }
      proxy?.$modal.msgSuccess("操作成功");
      dialog.visible = false;
      await getList();
    }
  });
}

/** 删除按钮操作 */
const handleDelete = async (row?: InfoVO) => {
  const _ids = row?.id || ids.value;
  await proxy?.$modal.confirm('是否确认删除研报信息编号为"' + _ids + '"的数据项？').finally(() => loading.value = false);
  await delInfo(_ids);
  proxy?.$modal.msgSuccess("删除成功");
  await getList();
}

/** 导出按钮操作 */
const handleExport = () => {
  proxy?.download('system/info/export', {
    ...queryParams.value
  }, `info_${new Date().getTime()}.xlsx`)
}

onMounted(() => {
  getList();
});
</script>
