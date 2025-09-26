graph TD
    subgraph A[层级一: 液体与动力 （Fluid & Power）]
        direction LR
        subgraph SG_PUMP[第八类: 液冷水泵供应商]
            direction TB
            PUMP_GRUNDFOS[格兰富水泵]
            PUMP_XYLEM[赛莱默]
            PUMP_FEILONG[飞龙股份]
            PUMP_WILO[威乐中国水泵]
            PUMP_XINJIE[新界泵业]
            PUMP_HFXH[合肥新沪屏蔽泵]
            PUMP_TAIFU[泰福泵业]
            PUMP_JIANAN[建安泵业]
            PUMP_LEO[利欧泵业]
            PUMP_GUANGTAI[广泰电机]
            PUMP_NANFANG[南方泵业]
            PUMP_DECHANG[德昌机电]
            PUMP_DUOPULE[多浦乐泵业]
            PUMP_COLFAX[科尔法]
            PUMP_KAIQUAN[凯泉泵业]
            PUMP_AOSHENG[澳升泵业]
        end

        subgraph SG_COOLANT[第七类: 冷却液供应商]
            direction TB
            COOLANT_RUNHE[润禾新材]
            COOLANT_CHEMOURS[Chemours科慕]
            COOLANT_3M[3M]
            COOLANT_DOW[Dow陶氏化学]
            COOLANT_BASF[BASF巴斯夫]
            COOLANT_SOLVAY[Solvay索尔维]
            COOLANT_ENGINEERED[Engineered Fluids]
            COOLANT_HONEYWELL[霍尼韦尔]
            COOLANT_TOTAL[道达尔]
            COOLANT_CHANGXIAN[珠海长先新材]
            COOLANT_YAPEIXI[亚培烯科技]
            COOLANT_SANHU[安徽三湖新材]
            COOLANT_ANMEI[安美科技]
            COOLANT_JINGMAI[河北京脉]
            COOLANT_NOAH[浙江诺亚氟]
            COOLANT_UNICHEM[上海佑尼化学]
            COOLANT_BODA[成都晨光博达]
            COOLANT_CASTROL[嘉实多]
        end
    end

    subgraph B[层级二: 流体连接件 （Fluid Connectors）]
        direction LR
        subgraph SG_PIPE[第六类: 液冷管路供应商]
            direction TB
            PIPE_CHUANHUAN[川环科技]
            PIPE_PARKER[派克 Parker]
            PIPE_GATES[Gates Corporation盖茨]
            PIPE_HANGYAN[上海行言实业]
            PIPE_QUANXIN[东莞市铨信流体]
            PIPE_RUIYINGLITE[无锡市瑞英力特]
            PIPE_JIPAI[吉派流体]
            PIPE_SHIJUN[宁波世峻]
            PIPE_PAZHUO[江苏帕卓]
            PIPE_MEILONG[佛山市美龙管业]
            PIPE_BUTZ[巴茨流体]
            PIPE_YADA[亚大集团]
            PIPE_HONGCHANG[洪昌聚发]
            PIPE_DANKAI[丹凯科技]
            PIPE_HANSAFLEX[HANSA-FLEX中国]
            PIPE_JIAYIDA_AGENT[嘉伊达]
            PIPE_LAIKESI[莱克斯软管]
            PIPE_KUANYU[宽裕管业]
            PIPE_LULE[路乐科技]
            PIPE_ALFAGOMMA[阿法格玛]
            PIPE_GF[GF管路系统中国]
        end

        subgraph SG_QD[第五类: 液冷快接头供应商]
            direction TB
            QD_AVC[奇鋐科技AVC]
            QD_AURAS[双鸿科技Auras]
            QD_CHUANHUAN[川环科技]
            QD_BEST[倍仕得]
            QD_BIKE[毕科电子]
            QD_ZHONGHANG[中航光电]
            QD_LANGAN[朗安]
            QD_TISHI[缇仕机电]
            QD_VESECONN[万硕（成都）航空]
            QD_LANKE[蓝科电气]
            QD_STERLING[斯特林液压]
            QD_ZHENGBEI[苏州正北连接]
            QD_YIDONG[益东流体]
            QD_JIAYIDA[嘉伊达]
            QD_RIGELE[东莞市锐格勒]
            QD_INVIC[英维克]
            QD_LIMINDA[立敏达]
            QD_BEEHE_QD[比赫电气]
            QD_STAUBLI[史陶比尔]
            QD_CPC[CPC]
            QD_PARKER[派克]
            QD_DANFOSS[丹佛斯]
            QD_NUOTONG[诺通流体]
            QD_CEJN[CEJN希恩]
            QD_JIAZE[台湾嘉泽]
            QD_QIANGRUI[强瑞技术]
        end
    end

    subgraph C[层级三: 核心散热组件 （Core Thermal Components）]
        direction LR
        subgraph SG_MANIFOLD[第四类: 分歧管（Manifold）供应商]
            direction TB
            MANIFOLD_AVC[奇鋐科技AVC]
            MANIFOLD_AURAS[双鸿科技Auras]
            MANIFOLD_PINDA[品达科技Pinda]
            MANIFOLD_ZHONGSHAN[众山精密]
            MANIFOLD_COOLERMASTER[酷冷至尊 Cooler Master]
            MANIFOLD_BYD[比亚迪电子Lead Wealth]
            MANIFOLD_FOXCONN[富士康]
            MANIFOLD_LITEON[光宝LiteOn]
            MANIFOLD_DELTA[台达Delta]
        end

        subgraph SG_COLDPLATE[第二类: 冷板及散热模组供应商]
            direction TB
            CP_AVC[奇鋐科技AVC]
            CP_FEIRONGDA[飞荣达]
            CP_XIANGXIN[祥鑫科技]
            CP_AURAS[双鸿科技Auras]
            CP_SUNON[建准电机SUNON]
            CP_NIDEC[尼得科Nidec]
            CP_FORCECON[力致科技Forcecon]
            CP_YSTECH[元山科技Y.S. Tech]
            CP_COOLIT[CoolIT Systems]
            CP_ASETEK[Asetek]
            CP_ZUTACORE[ZutaCore]
            CP_JETCOOL[JetCool]
            CP_BOYD[Boyd（宝德）]
            CP_LIMINDA[立敏达]
            CP_COOLERMASTER[Cooler Master]
            CP_JIANCHE[健策精密]
            CP_LUXSHARE[立讯精密]
            CP_ANGPAI[深圳昂湃]
            CP_FENGMAO[风茂腾科技]
            CP_YIDONG[奕东电子]
            CP_TONGYU[同裕电子]
            CP_SHUNSHANG[顺熵科技]
            CP_HUASHENGYUAN[华盛源机电]
            CP_DONGWEIFENG[东维丰电子]
            CP_LENGQUAN[冷泉能控]
            CP_XUNLING[讯凌新科技]
            CP_KEYUE[四川科跃热传]
            CP_TAISHUO[东莞泰硕电子]
            CP_XIANGBO[祥博传热]
            CP_SANHUA[三花]
            CP_YINLUN[银轮]
            CP_JINGYAN[精研科技]
            CP_FANGSHENG[方盛股份]
        end
    end

    subgraph D[层级四: 系统集成与解决方案 （System Integration & Solutions）]
        subgraph SG_CDU[第三类: 液冷CDU & 全链条解决方案商]
            direction TB
            CDU_LVSEYUNTU[绿色云图&网宿科技]
            CDU_HAIWU[海悟集团]
            CDU_KEHUA[科华数据]
            CDU_SHUGUANG[曙光数创]
            CDU_SCHNEIDER[施耐德]
            CDU_CHUANRUN[川润股份]
            CDU_MEILIYUN[美利云]
            CDU_ZIGUANG[紫光股份&新华三]
            CDU_SHENLING[申菱环境]
            CDU_JIECHUANG[杰创智能]
            CDU_RUNJIAN[润建股份]
            CDU_TAIBO[泰铂科技]
            CDU_VERTIV[维谛Vertiv]
            CDU_MOTIVAIR[Motivair]
            CDU_LIQUIDSTACK[Liquid Stack]
            CDU_COOLIT[CoolIT Systems]
            CDU_NVENT[nVent盈凡]
            CDU_BOYD[Boyd（宝德）]
            CDU_NIDEC[Nidec尼得科]
            CDU_DELTA[Dalta台达]
            CDU_COOLERMASTER[CoolerMaster讯强]
            CDU_BEEHE[Beehe比赫]
            CDU_YUANDI[远地数字]
            CDU_INVIC[英维克]
            CDU_GAOLAN[高澜股份]
            CDU_TONGFEI[三河同飞]
            CDU_ZKCORE[中科芯纪元]
            CDU_ZKQIANCHENG[中科干乘]
            CDU_HASHI[哈希温控]
            CDU_WEIBOCHI[深圳威铂驰]
            CDU_KANGSHENG[康盛股份]
            CDU_SICHUAN_CHUANRUN[四川川润]
            CDU_HESTER[常州贺斯特]
            CDU_JIALITU[南京佳力图]
            CDU_JINGRUI[河南晶锐]
            CDU_XINGHE[广州星河新能源]
            CDU_TANHUO[炭火科技]
            CDU_YIXINTONG[奕信通]
            CDU_AITENET[艾特网能]
            CDU_TCT[TcT热控科技]
        end
    end

    subgraph E[层级五: 服务器与ODM整机 （Server & ODM Assembly）]
        subgraph SG_SERVER[第一类: 液冷服务器与ODM厂商]
            direction TB
            SERVER_LENOVO[Lenovo联想]
            SERVER_COREWEAVE[CoreWeave]
            SERVER_GIGABYTE[Gigabyte技嘉]
            SERVER_QUANTA[广达电脑]
            SERVER_DELL[戴尔]
            SERVER_ASUS[华硕]
            SERVER_HUAQIN[华勤]
            SERVER_RUIJIE[锐捷网络]
            SERVER_FIBERHOME[烽火通信]
            SERVER_HPE[HPE]
            SERVER_SUPERMICRO[Supermicro美超微]
            SERVER_INSPUR[浪潮]
            SERVER_AWS[AWS亚马逊]
            SERVER_WIWYNN[Wiwynn纬颖科技]
            SERVER_INVENTEC[Inventec英业达]
            SERVER_FOXCONN[Foxconn （鸿海/工业富联）]
            SERVER_ASROCK[ASRockRack华擎科技]
            SERVER_TYAN[Tyan泰安]
            SERVER_CISCO[Cisco思科]
            SERVER_H3C[新华三]
            SERVER_FUSIONSERVER[超聚变]
            SERVER_EVIDEN[Eviden]
        end
    end

    subgraph F[层级六: 最终用户与生态核心 （End-Users & Ecosystem Core）]
        direction LR
        END_NVIDIA[NVIDIA]
        END_INTEL[英特尔]
        END_HUAWEI[华为]
        END_MICROSOFT[微软]
        END_GOOGLE[谷歌]
        END_ALIBABA[阿里巴巴/阿里云]
        END_TENCENT[腾讯]
        END_BYTEDANCE[字节跳动]
        END_GDS[万国数据]
        PARTNER_AIRSYS[Airsys]
    end

    %% 供应关系链接 （所有关系均源自原文 - 已修正和核对）
    CP_AVC --> END_NVIDIA
    CP_AURAS --> END_NVIDIA
    CP_COOLERMASTER --> END_NVIDIA
    CP_LIMINDA --> END_NVIDIA
    CP_LIMINDA --> END_INTEL
    CP_LIMINDA --> CDU_SCHNEIDER
    CP_LIMINDA --> END_HUAWEI
    CP_YIDONG --"配合生产"--> MANIFOLD_PINDA
    CP_KEYUE --"提供液冷板"--> CDU_COOLIT
    CP_FANGSHENG --"合作开发"--> CDU_VERTIV
    CP_FANGSHENG --"间接供货"--> END_NVIDIA
    
    MANIFOLD_AVC --> END_NVIDIA
    MANIFOLD_AURAS --> END_NVIDIA
    MANIFOLD_COOLERMASTER --> END_NVIDIA
    MANIFOLD_BYD --> END_NVIDIA
    MANIFOLD_FOXCONN --> END_NVIDIA
    MANIFOLD_LITEON --> END_NVIDIA
    MANIFOLD_DELTA --> END_NVIDIA
    
    QD_AVC --> END_NVIDIA
    QD_AURAS --> END_NVIDIA
    QD_INVIC --> END_NVIDIA
    QD_INVIC --> END_INTEL
    QD_LIMINDA --> END_NVIDIA
    QD_CPC --> END_NVIDIA
    QD_NUOTONG --> END_NVIDIA
    QD_CHUANHUAN --> END_NVIDIA
    QD_QIANGRUI --> END_NVIDIA
    QD_QIANGRUI --> END_HUAWEI
    PIPE_CHUANHUAN --> END_NVIDIA
    PIPE_LULE -- "代理销售" --> QD_DANFOSS

    PUMP_GRUNDFOS --> END_MICROSOFT
    PUMP_GRUNDFOS --> END_GOOGLE
    PUMP_GRUNDFOS --> CDU_VERTIV
    PUMP_GRUNDFOS --> CDU_SCHNEIDER
    PUMP_GRUNDFOS --> CDU_COOLIT
    PUMP_XYLEM --> CDU_GAOLAN
    PUMP_XYLEM --> CDU_SHENLING
    PUMP_XYLEM --> CDU_INVIC
    PUMP_XYLEM --> CDU_TCT
    PUMP_XYLEM --> CDU_SHUGUANG
    PUMP_FEILONG --> END_NVIDIA
    PUMP_KAIQUAN --> END_ALIBABA
    PUMP_KAIQUAN --> END_GDS
    
    COOLANT_CASTROL -- "合作" --> PARTNER_AIRSYS
    
    CDU_VERTIV --> END_NVIDIA
    CDU_MOTIVAIR --> END_NVIDIA
    CDU_SCHNEIDER --> CDU_MOTIVAIR
    CDU_COOLIT --> END_NVIDIA
    CDU_COOLIT --> SERVER_DELL
    CDU_COOLIT --> SERVER_GIGABYTE
    CDU_NVENT --> END_NVIDIA
    CDU_BOYD --> END_NVIDIA
    CDU_NIDEC -- "指定供应商" --> SERVER_SUPERMICRO
    CDU_DELTA --> END_NVIDIA
    CDU_COOLERMASTER --> END_NVIDIA
    CDU_BEEHE --> END_NVIDIA
    CDU_TCT --> END_NVIDIA
    CDU_GAOLAN --> END_BYTEDANCE
    CDU_GAOLAN --> END_ALIBABA
    CDU_GAOLAN --> END_TENCENT
    CDU_GAOLAN --> END_GDS
    CDU_GAOLAN --> SERVER_INSPUR
    CDU_GAOLAN --> SERVER_H3C

    SERVER_LENOVO --> END_NVIDIA
    SERVER_DELL --> SERVER_COREWEAVE
    SERVER_DELL --> END_NVIDIA
    SERVER_GIGABYTE --> END_NVIDIA
    SERVER_QUANTA --> END_NVIDIA
    SERVER_ASUS --> END_NVIDIA
    SERVER_HPE --> END_NVIDIA
    SERVER_SUPERMICRO --> END_NVIDIA
    SERVER_WIWYNN --> END_NVIDIA
    SERVER_FOXCONN --> END_NVIDIA
    SERVER_FOXCONN --> END_MICROSOFT
    SERVER_ASROCK --> END_NVIDIA
    SERVER_CISCO --> END_NVIDIA
    SERVER_EVIDEN -- "采用" --> PIPE_PARKER

    %% Links to and from the spacer node to create vertical space
    E --> SPACER --> F

    classDef l1 fill:#E6F3FF,stroke:#007bff,stroke-width:1px;
    classDef l2 fill:#d9e8ff,stroke:#007bff,stroke-width:1px;
    classDef l3 fill:#cce0ff,stroke:#007bff,stroke-width:1px;
    classDef l4 fill:#EBF5EB,stroke:#28a745,stroke-width:1px;
    classDef l5 fill:#FFF4E6,stroke:#fd7e14,stroke-width:1px;
    classDef l6 fill:#FEE7F0,stroke:#d63384,stroke-width:1px;

    class A l1;
    class B l2;
    class C l3;
    class D l4;
    class E l5;
    class F l6;
