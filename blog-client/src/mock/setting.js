import Mock from 'mockjs';

Mock.mock("/api/setting", "get", {
    code: 0,
    msg: "",
    data: {
      avatar: "https://img2.baidu.com/it/u=1205915504,3217808836&fm=26&fmt=auto&gp=0.jpg",
      siteTitle: "尹家礼的空间",
      github: "https://github.com/jiliyi",
      qq: "2528966877",
      qqQrCode:
        "http://www.duyiedu.com/source/img/%E5%B0%8F%E6%B8%A1%E5%BE%AE%E4%BF%A1%E4%BA%8C%E7%BB%B4%E7%A0%81.png",
      weixin: "jialiyiner",
      weixinQrCode:
        "http://www.duyiedu.com/source/img/%E5%85%AC%E4%BC%97%E5%8F%B7%E4%BA%8C%E7%BB%B4%E7%A0%81.png",
      mail: "duyi@gmail.com",
      icp: "鄂ICP备2021007122号-1",
      githubName: "jiliyi",
      favicon: "http://mdrs.yuanjin.tech/Fs4CDlC6mwe_WXLMIiXcmSJLHO4f",
    },
  });