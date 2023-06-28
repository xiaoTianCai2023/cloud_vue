type accordionItem = {
    expand: boolean,
    title: string,
    checkIcon: string,
    describe: string,
    BG: string,
    detailInfo: string[],
    caseImg: string[],
    relevanceProduct: { icon: string; text: string; }[],
}[]
export type { accordionItem };
export const accordionList: accordionItem = [
    {
        expand: true,
        title: '音视频通信',
        describe: '提供坚实的云端一体音视频 PaaS 能力', //简介
        checkIcon: 'https://cloudcache.tencentcs.cn/qcloud/ui/tea-portal-material-portal/build/Main/images/tpm1-list-blue-hook_db8.svg',
        BG: 'https://qcloudimg.tencent-cloud.cn/raw/5cb5c172a477f078ad6b65ed89dea75f.jpg',
        detailInfo: [
            //详情 简介
            '腾讯 20 余年音视频领域深厚技术积淀开放',
            '依托 RT-ONE™ 音视频通信网络，实现全球互通',
            '全终端 SDK ，云端一体音视频解决方案，最快1天接入'
        ],
        caseImg: [
            'https://qcloudimg.tencent-cloud.cn/raw/128938875bb3f369cc3d040f2a27a7a1.png',
            'https://qcloudimg.tencent-cloud.cn/raw/0f22247c2ba315f2e61b25d370adce73.png'
        ],
        relevanceProduct: [
            {
                icon: 'https://qcloudimg.tencent-cloud.cn/raw/cd7551d9822d19d3392314f36c629379.svg',
                text: '实时音视频 TRTC',
            },
            {
                icon: 'https://qcloudimg.tencent-cloud.cn/raw/011b2cc4be6620abdd53175966cdcd11.svg',
                text: '即时通信 IM',
            },
            {
                icon: 'https://qcloudimg.tencent-cloud.cn/raw/856ae8e3f6fa81170d601186ffded2d0.svg',
                text: '云直播 CSS',
            },
        ]

    },
    {
        expand: false,
        title: '游戏云',
        describe: '致力于打造高质量、全方位生态的游戏云服务平台',
        detailInfo: [
            '高 IO 云服务器、高可用云数据库万量级 IOPS',
            '自建万兆云机房，全球覆盖，配备 100+ BGP 顶级网络',
            '与开放平台、应用宝、玩吧、QQ 浏览器无缝对接'
        ],
        checkIcon: 'https://cloudcache.tencentcs.cn/qcloud/ui/tea-portal-material-portal/build/Main/images/tpm1-list-blue-hook_db8.svg',
        BG: 'https://qcloudimg.tencent-cloud.cn/raw/ff2f296d21d56b4bea1529b8d3d11c7b.jpg',// 背景
        caseImg: [
            'https://qcloudimg.tencent-cloud.cn/raw/cf086d3b6f12c649789da28e2829372a.png',
            'https://qcloudimg.tencent-cloud.cn/raw/5d14c80acc1a7a8f53a9b16859c39789.png',
            'https://qcloudimg.tencent-cloud.cn/raw/629b42f14fc181b63f18bed81e38a7bc.png'
        ],
        relevanceProduct: [
            {
                icon: 'https://qcloudimg.tencent-cloud.cn/raw/f6804323083e76883dd501360e1e3b97.svg',
                text: '云服务器',
            },
            {
                icon: 'https://qcloudimg.tencent-cloud.cn/raw/629eeb6192f5b34be02a02b35c613126.svg',
                text: '游戏数据库',
            },
            {
                icon: 'https://qcloudimg.tencent-cloud.cn/raw/0801d929bc3708e7b332baa979c471f7.svg',
                text: '游戏多媒体引擎',
            },
        ]

    },
    {
        expand: false,
        title: '微搭低代码',
        describe: '高性能低代码开发平台，拖拽式构建小程序及其他应用',
        detailInfo: [
            '高 IO 云服务器、高可用云数据库万量级 IOPS',
            '自建万兆云机房，全球覆盖，配备 100+ BGP 顶级网络',
            '与开放平台、应用宝、玩吧、QQ 浏览器无缝对接'
        ],
        checkIcon: 'https://cloudcache.tencentcs.cn/qcloud/ui/tea-portal-material-portal/build/Main/images/tpm1-list-blue-hook_db8.svg',
        BG: 'https://qcloudimg.tencent-cloud.cn/raw/7874580eb57152872f12155d27d39d5c.jpg',// 背景
        caseImg: [
            'https://qcloudimg.tencent-cloud.cn/raw/408e49c67f3f918d178c6db8b414c9aa.png',
        ],
        relevanceProduct: [
            {
                icon: 'https://qcloudimg.tencent-cloud.cn/raw/f6804323083e76883dd501360e1e3b97.svg',
                text: '云服务器',
            },
            {
                icon: 'https://qcloudimg.tencent-cloud.cn/raw/629eeb6192f5b34be02a02b35c613126.svg',
                text: '游戏数据库',
            },
            {
                icon: 'https://qcloudimg.tencent-cloud.cn/raw/0801d929bc3708e7b332baa979c471f7.svg',
                text: '游戏多媒体引擎',
            },
        ]

    },
    {
        expand: false,
        title: '金融',
        describe: '新基建、新连接、新服务，全面助力行业数字化转型',
        detailInfo: [
            '高 IO 云服务器、高可用云数据库万量级 IOPS',
            '自建万兆云机房，全球覆盖，配备 100+ BGP 顶级网络',
            '与开放平台、应用宝、玩吧、QQ 浏览器无缝对接'
        ],
        checkIcon: 'https://cloudcache.tencentcs.cn/qcloud/ui/tea-portal-material-portal/build/Main/images/tpm1-list-blue-hook_db8.svg',
        BG: 'https://qcloudimg.tencent-cloud.cn/raw/317664c62aeef9374fd1827fad2a0ce5.jpg',// 背景
        caseImg: [
            'https://qcloudimg.tencent-cloud.cn/raw/68d6831a4d3a797c42802949c3e600ac.png',
            'https://qcloudimg.tencent-cloud.cn/raw/b66497772fb52ba7b39ab0716665a897.png',
        ],
        relevanceProduct: [
            {
                icon: 'https://qcloudimg.tencent-cloud.cn/raw/f6804323083e76883dd501360e1e3b97.svg',
                text: '云服务器',
            },
            {
                icon: 'https://qcloudimg.tencent-cloud.cn/raw/629eeb6192f5b34be02a02b35c613126.svg',
                text: '游戏数据库',
            },
            {
                icon: 'https://qcloudimg.tencent-cloud.cn/raw/0801d929bc3708e7b332baa979c471f7.svg',
                text: '游戏多媒体引擎',
            },
        ]

    },
    {
        expand: false,
        title: '制造业',
        describe: '助力制造业实现生产透明化、办公无纸化、车间无人化',
        detailInfo: [
            '高 IO 云服务器、高可用云数据库万量级 IOPS',
            '自建万兆云机房，全球覆盖，配备 100+ BGP 顶级网络',
            '与开放平台、应用宝、玩吧、QQ 浏览器无缝对接'
        ],
        checkIcon: 'https://cloudcache.tencentcs.cn/qcloud/ui/tea-portal-material-portal/build/Main/images/tpm1-list-blue-hook_db8.svg',
        BG: 'https://qcloudimg.tencent-cloud.cn/raw/02b5f458403edf319fb35e718728f2d9.jpg',
        caseImg: [
            'https://qcloudimg.tencent-cloud.cn/raw/b20324205a26ff1caf322693319c3db0.png',
        ],
        relevanceProduct: [
            {
                icon: 'https://qcloudimg.tencent-cloud.cn/raw/f6804323083e76883dd501360e1e3b97.svg',
                text: '云服务器',
            },
            {
                icon: 'https://qcloudimg.tencent-cloud.cn/raw/629eeb6192f5b34be02a02b35c613126.svg',
                text: '游戏数据库',
            },
            {
                icon: 'https://qcloudimg.tencent-cloud.cn/raw/0801d929bc3708e7b332baa979c471f7.svg',
                text: '游戏多媒体引擎',
            },
        ]

    },
]