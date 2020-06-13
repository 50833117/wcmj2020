var tipuesearch = {"pages":[{"title":"About","text":"CMSimfly 內容管理網誌 課程倉儲: https://github.com/chiamingyen/cmsimfly 內容管理: https://chiamingyen.github.io/cmsimfly/ 課程投影片: https://chiamingyen.github.io/cmsimfly/reveal 課程網誌: https://chiamingyen.github.io/cmsimfly/blog","tags":"misc","url":"./pages/about/"},{"title":"2020 Fall CP 課程","text":"2018 Fall 一開始, 在一台已經 10 年的 32 位元的 Windows 7 操作系統中工作. 可攜的 Python 3.7.0 仍然可以配置, Leo Editor、PyQt5、flask、Markdown、pelican 與 bs4 的安裝, 也都沒有問題. 只有 Eric6 因為缺少必要模組與 Python 3.7.0 對應的 pyqt5-tools, 因此沒有安裝. 電腦規格 目前系上已經沒有 32 位元 Windows 操作系統的電腦, 所以先前只要有學生提到所使用的電腦是舊型 32 位元的 Windows XP 或 Windows 7, 都無法提供相應的可攜程式系統. 但是, 當您桌上就只一台早期 Sony 推出的 VGC-LM26T 電腦, 採用 Intel core 2 Duo T8100 2.1 GHz 裝載 32 位元 Windows 7, 記憶體只有 2GB 的老舊電腦. 夠用嗎? 當然可以, 使用的是特別製作的 32 位元可攜系統 , 除了不支援 Eric6 之外, 其餘功能都與 64 位元的 p37 相同. 工作流程 從 2018 Fall 開始, 前半學期希望每位計算機程課程的學員, 都能透過 2018 計算機程式教材 內容, 深入學習 Python 3 各種程式語法, 利用 CMSimfly 、 Pelican 與 Reveal.js , 熟悉如何在 Github 配置自己的網站、網誌與網際簡報系統. 使用時, 啟動隨身系統的 start.bat, 利用命令列指令, git clone https://github.com/mdecourse/2018fall, 然後將內容配置在各自的 Github 帳號下. 程式專案 早在 1999 年, 就已經開始進行所謂 網際機械設計資源中心 的構建, 想像中的資源中心是一套網際專家系統, 包含各式機械設計流程中所需的模組, 全部依附在一個相對穩定, 可以持續改進的核心架構下, 類似 docassemble 的一套系統. 將近二十年過去, 網際機械設計資源中心 始終仍只有片段系統, 其中包含 CMSimfly 、 Pygrouf 與 Pyslvs ( Pyslvs 手冊 )等相關專案. 就如同 如何寫出有用的程式? 一文中所述, \"沒有興趣不要來念資工\" 是一句非常貼切的警語, 當學生對於程式設計提不起興趣, 沒有將所學的各式語法、資料結構與演算法, 套用在自己非常有興趣的領域中, 用來解決各式問題的話, 日復一日, 我們還是寫不出任何有用的程式! 早該起頭的重要工作 計算機程式的重要性 其實已經無需爭辯, 人類未來的許多工作都是透過網路與數位運算達成, 既知趨勢如此, 每一位工程師就該越早起頭原本就該進行的重要工作, 透過計算機程式來解決問題, 構築一個值得長期投注心力的程式專案.","tags":"W12","url":"./2020-Fall-32-bit-Windows.html"},{"title":"2020 WCMJ-2020-W10-課程簡介","text":"以 SSH 維護倉 由於在電腦教室時採用純 IPv6 協定上網, 因此為了能夠在近端將倉儲改版資料推送到目前只接受 IPv4 協定連線的 github, 以下除了將原本以 https 對 github 連線, 改為以 ssh 協定連線外, 在 Windows 環境下必須利用 putty 與 plink, 設定 putty 格式的 .ppk 以及能夠同時支援 IPv4 與 IPv6 的代理主機. 設定步驟如下: 下載 Putty 工具組 從 https://www.chiark.greenend.org.uk/~sgtatham/putty/ 下載一般版, 或從 http://jakub.kotrla.net/putty/ 下載特殊的可攜版本. 利用 y:\\portablegit\\bin\\sh.exe 進入 shell 命令環境後, 以 1 ssh-keygen -t rsa -b 4096 -C \"使用者學號\" 在 /y/home/.ssh 目錄下建立 id_rsa 與 id_rsa.pub 等 private key 與 public key 之後以 SciTE 開啟 id_rsa.pub 後, 將此 public key 的內容, 以新增添加到 Github.com 帳號下 personal settings -> SSH and GPG keys 頁面下. 接下來要利用 puttygen.exe 將 id_rsa 轉為 Putty 可以解讀的 .ppk 格式, 並修改隨身系統的啟動批次檔案, 指定利用 putty 目錄下的 plink 執行 git 指令的網路代理設定. 修改啟動的 start.bat 加入下列設定: set GIT_HOME=%Disk%:\\portablegit\\bin\\ set GIT_SSH=%Disk%:\\putty\\plink.exe 4. 利用 puttygen.exe 載入第二步驟所建立的 private key, 也就是 id_rsa. 開啟 puttygen 之後, 以右下方的 load 載入 id_rsa, 成功載入後, 利用 save private key 按鈕, 將已經轉為 putty 格式的 .ppk 存檔. 此一 .ppk 檔案必須在設定 putty 中 github.com session 時, 在 Connection->SSH->Auth 項目下, 將轉檔後的 .ppk 指向 private key file for authentication 欄位. 並在 Connection->Proxy 項目下, 指定 Proxy type: HTTP, 並將 IPv6 代理主機設為 ::53 或 ::42 埠號設為 3128. 之後確定 home 下的 .ssh 目錄中的 config 設定檔案為； no proxy at home ProxyCommand y:/PortableGit/mingw64/bin/connect.exe -H proxy.mde.nfu.edu.tw:3128 %h %p set git_ssh=y:/putty/plink.exe with auth under putty github.com session setup ProxyCommand y:/putty/plink.exe github.com %h %p Host github.com User git Port 22 Hostname github.com # for connect . exe need openssh key format # IdentityFile \"y:\\home\\.ssh\\id_rsa_mdecourse\" # for plink . exe need rsa key format but set under putty github . com session # plink . exe do not need the following setting # IdentityFile \"y:\\home\\.ssh\\mdecourse_putty_private.ppk\" TCPKeepAlive yes IdentitiesOnly yes 最後再將 wcmj2020 倉儲中 .git 目錄下的 config 檔案中的連線協定, 由 https 改為採 ssh 連線: 範例如下: [core] repositoryformatversion = 0 filemode = false bare = false logallrefupdates = true symlinks = false ignorecase = true [submodule] active = . [remote \"origin\"] #url = https://github.com/mdecourse/wcmj2020.git url = git@github.com:mdecourse/wcmj2020.git fetch = +refs/heads/ :refs/remotes/origin/ [branch \"master\"] remote = origin merge = refs/heads/master [submodule \"cmsimde\"] url = https://github.com/mdecourse/cmsimde.git 之後就可以透過近端的 .ppk private key 與 Github.com 上的 public key 對應, 無需輸入帳號密碼就可以進行 git push. W10 以 ssh 對倉儲連線設定說明影片 (登入 @gm 帳號後觀看)","tags":"W10","url":"./2020-Win10-W10.html"},{"title":"2020 WCMJ-2020-W10-課程簡介","text":"W6-W9 Online education 線上直播: Youtube + Portable OBS 線上開會: https://meet.google.com 讓手機可以利用電腦熱點上網 採用 https://www.tp-link.com/us/home-networking/usb-adapter/tl-wn725n/ 將此一 USB Wifi adapter 連接電腦後, 若網路為 IPv4 協定時, 可以透過\"設定 -> 網路和網際網路 -> 行動熱點\", 選擇開啟並編輯\"網路名稱與網路密碼\"後, 讓至多 8 台手機透過熱點連線上網. 但是因為目前 Windows 10 並未提供 IPv6 網路協定下的網路熱點功能, 因此在純 IPv6 網路協定下無法使用\"行動熱點\"服務. 利用手機鏡頭當作 webcam: Android: https://www.digitalcitizen.life/turn-android-smartphone-webcam-windows iPhone: https://www.makeuseof.com/tag/use-your-iphone-as-a-webcam-heres-how-ios/ 需要 clone 個人倉儲時: git clone --recurse-submodules 倉儲_url.git 例如: git clone --recurse-submodules https://github.com/mdecourse/wcmj2020.git","tags":"W10","url":"./2020-Win10-W6-W9.html"}]};