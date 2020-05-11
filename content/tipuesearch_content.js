var tipuesearch = {"pages": [{'title': 'About .', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About ..html'}, {'title': 'W8', 'text': '網管筆記 \n IPv4 version 4 IP 4個區段，用( . )隔開\xa0 IPv6 version 6 IP 8個區段，用( : )隔開\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0version版本 edition版本 \n inter-net(網際，inter+network)==inter-national\xa0 \xa0 protocol(協定)\xa0 \xa0tcp/ip==transmision control protocol/internet protocol\xa0 \xa0 \xa0 \xa0dns==domainname server 符號名稱伺服器\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0140.130.17.254(系gateway通道)\xa0 \xa0 NAT network address translation\xa0 \xa0inter network(內部網路)192.168.*\xa0 \xa0ip address mapping 對應\xa0 \xa0route 路徑\xa0 remote login 遠端登入\xa0 \xa0 packet封包\xa0 \xa0micor微\xa0 life cycle生命週期\xa0 microscope顯微鏡\xa0 \xa0definition定義 tele scope望遠鏡\xa0 \xa0hierarchy架構\xa0 macro巨[比原子(atom)大]\xa0 circumstances某種環境下所處的狀態 atomic bomb原子彈 commit提交 terminology術語學 particular特別的\xa0 software軟體 firmware韌體 hardware硬體 assembly組合語言 URL統一資源定位 \n types of computer\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 1.super computertl 超級電腦\xa0 batch computation(批次運算) 2.mainframe伺服器主機(cluster 叢集) 3.server\xa0 伺服器\xa0 (實體、虛擬) 4.Personal computer 5.micor controller(微控制器) rasberry pi 樹莓派(小PC)\xa0 embedded嵌入式 6.mobile phone \n Y:反/data指的是Y槽的root根目錄\xa0 Y指的是Y槽，\xa0 >為回應符號(pronpt sign)\xa0 反/為backslash反斜線\xa0 dir為顯示目錄內容的指令 cd tmp表示change directory到tmp子目錄 git為分散式版次管理的指令名稱\xa0 git clone表示要使用git對遠端的倉儲url進行clone submodule子模組\xa0 phthon -m pip install flask-cors 開個人網站: Y:l>cd tmp >cd wcmj2020 >cd cmsimde >phthon wsgi.py PUSH Y:反/TMP反/WCMJ2020>git add. >git commit -m "add 添加之東西(可改)" >git push \n', 'tags': '', 'url': 'W8.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/ cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 \xa0 https://localhost:9443 \xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}, {'title': '第九週實習', 'text': '', 'tags': '', 'url': '第九週實習.html'}, {'title': '電腦的軟硬體簡介', 'text': '電腦的硬體 主機 機殼容納和保護主機營體的殼 中央處理器(CPU)CPU主要工作是算術、運輯運算，解讀電腦內的每個指令來控制電腦的運作。 電源(POWER)是電腦內接式元件電力來源的組件，他將市電轉換為直流電供給其他元件使用 主機板:主機板的功能主要在承戴其插卡，所有電腦裡的東西東會接到主機板，他們之間要相互的傳資料也是經過主機板，之後再傳到對方，簡單的來說，他就像一個轉運站一樣。 顯示卡顯示卡在電腦中主要作用就是城市運行時根據CPU提供的指令和有關數據，轉換成顯示器能夠接受的的文字和圖形顯示信號後通過螢幕顯示出來，簡單來說，就是把電腦計算出來的文字與圖形表現在顯示器上。 記憶體記憶體的主要功用是占存資料，當它被使用時，系統可以從RAM上存取資料，而且需要電力來維持它的記憶。 硬碟硬碟就是電腦中負責儲存資料的工具，他就一個資料庫。 音效卡負責處理電腦音訊的處理讓我們可以聽到電腦發出的聲音 光碟機顧名思義就是讀取光碟的工具。 軟碟機又叫磁碟機，是一種儲存資料的工具。 \n 主機外的硬體鍵盤、滑鼠、螢幕、耳機、印表機、掃描器 \n', 'tags': '', 'url': '電腦的軟硬體簡介.html'}, {'title': '網路架構與設定簡介', 'text': '一般網路的架構可以分成防火牆、內部網路、外部網路 防火牆可以想像是內部網路與外部網路的防禦邊界，不同網路間的資料流，可根據防火牆的設定，允許或封鎖特定程式等等 內部網路組織內部進行資訊傳輸及資料轉換的網路區域，因不能直接連接到外部網路，所以安全性較高。 外部網路外部自由傳說的網路區域，因資料傳遞並無受到過濾和限制，所以安全性最低 \n win10電腦網路設定用操作表示 \n \n \n \n', 'tags': '', 'url': '網路架構與設定簡介.html'}]};