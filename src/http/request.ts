import axios from '@http'


// body的参数
export interface HttpResponseBase {
    code: number,
    msg: string,
    data: any
}


// 模块2： 轮播图
// 轮播图的素材可能是视频或者文件
export interface CarouselsDataType {
    title: string,
    dec: string,
    mp4?: string,
    id: string,
    img?: string
}

export const getCarousels = function(){
    return axios.get('/api/mp4/carousel')
}


// 模块3： 序列帧tabs
export interface FrameTabDataType {
    name: string,
    id: string,
    left_card: [FrameTabLeftCardDataType],
    right_card: [FrameTabRightCardDataType]
}
interface FrameTabLeftCardDataType {
    name: string,
    dec: string,
    id: string
}
interface FrameTabRightCardDataType {
    name: string,
    dec: string,
    tags: [string]
}

export const getFrameTabs = function(){
    return axios.get('/api/frame/tabs')
}

// 模块5： 序列帧卡片
export interface FrameCardsDataType {
    name: string,
    dec: string,
    icon_url: string
}

export const getFrameCards = function(){
    return axios.get('/api/frame/cards')
}


// 模块6： 二维码卡片
export interface QRcodeDataType {
    qrcode_url: string
}

export const getQRCODE= function(){
    return axios.get('/api/qr_code')
}


// 模块8： 头部搜索框   
// response的对象interface无法定义，这个是爬取的腾讯云接口
interface SearchQueryBody {
    search: string   //查询参数
}

export const searchPostRequest = function(data: SearchQueryBody) {
    return axios.post('/api/nav/search', data)
}


// 模块9： 解决方案菜单栏
export interface SolutionTabsDataType {
    search_keywords: [SearchKeyWordsDateType],
    list: [ListDataType]
}

interface SearchKeyWordsDateType {
    name: string,
    url: string
}
interface ListDataType {
    tab: string,
    id: string,
    content: [ContentListDataType]
}
interface ContentListDataType {
    type: string,
    id: string,
    list: [string]
}


export const getSolutionTabs = function() {
    return axios.get('/api/solution/tabs')
}


// 模块10： 登录

interface LoginData {
    username: string,
    password: string
}

export const loginRequest = function(data: LoginData) {
    return axios.post('/api/login', data)
}

export const logoutRequest = function() {
    return axios.post('/api/logout')
}