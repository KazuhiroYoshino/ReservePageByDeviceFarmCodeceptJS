# CodeceptJSを使って、DeviceFarmの実機をe2eテストする。

1. AWSアカウントを作成する
2. CodeceptJSでテストプロジェクトを作成する
3. ある程度動作確認できたら、DeviceFarmの環境変数をconfに反映させるスクリプト（codecept.audroid.conf.jsとpre_update_config.js）を用意する
4. ymlファイルを作成する
5. テストプロジェクトをパッケージ化する
6. テストパッケージとymlファイルをDeviceFarmにアップロードする
7. DevicePoolを作成する
8. ymlとテストパッケージを使って、DevicePoolに登録した実機でe2eテストをする
# DeviceFarmにテストプロジェクトを作成する
1. コンソールにログインする
![DeviceFarm009](https://user-images.githubusercontent.com/48610095/132937880-cf2700d4-469d-4943-8f01-14066a3c61e4.png)
2. プロジェクト作成
![DeviceFarm010](https://user-images.githubusercontent.com/48610095/132937933-0b0a74ff-bdbb-4797-8e4a-fd1177d873e8.png)
3. テストするDevicePoolが判るような名前が適当
![DeviceFarm011](https://user-images.githubusercontent.com/48610095/132937976-91a9fc7d-4869-4d48-b16d-d920229da4b5.png)
4. デバイスプールを作成するために、Project settingsをクリック
![DeviceFarm012](https://user-images.githubusercontent.com/48610095/132938033-2b1a57c2-7ad1-4efe-bd54-3dcee036d2bc.png)
5. DevicePoolでテストに使うデバイスを選択して登録する
![DeviceFarm013](https://user-images.githubusercontent.com/48610095/132938072-bedbbd1c-7705-4e19-9f0e-41588d684d7f.png)
6. Create Device Pool
![DeviceFarm014](https://user-images.githubusercontent.com/48610095/132938134-3d0b1b56-51e3-4e9d-a9d4-22cffba514b1.png)
7. 利用できるデバイスが一覧表示されるので、pool名を付けて、検索機能も適宜使用してデバイスを選ぶ
![DeviceFarm015](https://user-images.githubusercontent.com/48610095/132938212-0a6fc5b1-126c-420c-aff6-14808477961d.png)
8. プロジェクト・トップからymlとテストパッケージをアップロードする
![DeviceFarm016](https://user-images.githubusercontent.com/48610095/132938289-62182d3a-7733-43fe-bbfc-67bd0fec2f63.png)
9. Create New Run
![DeviceFarm017](https://user-images.githubusercontent.com/48610095/132938323-24642084-8cdf-44ca-a1df-8c62d749a704.png)
10. Webアプリかnativeアプリかを選択する。Webアプリの場合はWeb App
![DeviceFarm018](https://user-images.githubusercontent.com/48610095/132938360-ad156e3b-1268-4b3f-a0df-270f112ccf0a.png)
11. Run Nameを付ける。Device Poot単位で実行するテスト単位になる
![DeviceFarm019](https://user-images.githubusercontent.com/48610095/132938403-a744fbb3-47db-495f-ac11-b534e962ce84.png)
12. Frameworkを選択する。CodeceptJSの場合は、Appium Node.js
![DeviceFarm020](https://user-images.githubusercontent.com/48610095/132938445-a5715ea5-9c04-4963-8d1e-16ac2b464abe.png)
13. zipでパッケージ化したテストパッケージを選択して、次の画面でymlファイルを作成する
![DeviceFarm021](https://user-images.githubusercontent.com/48610095/132938547-ccfccbf4-5471-4bff-836e-1eff8e952d26.png)
14. Creta a Test spec（ここではDeviceFarmではymlファイルをspecファイルと呼んでいます）
![DeviceFarm022](https://user-images.githubusercontent.com/48610095/132938590-0630436f-560f-49fd-89e0-dfb60d9ebfb4.png)
15. 作成しておいたymlをコピペして名前を付けて Save as New
![DeviceFarm023](https://user-images.githubusercontent.com/48610095/132938649-5d40b18b-040c-4a83-8649-d2c69492bc99.png)
16. テスト中の録画OnOffはここで
![DeviceFarm024](https://user-images.githubusercontent.com/48610095/132938698-553f2452-6bf6-4ff5-9757-4f86d310136b.png)
17. 作成したデバイスプールをここで選択
![DeviceFarm025](https://user-images.githubusercontent.com/48610095/132938734-6a2a61f6-2385-431b-a5db-2b2068d58f2d.png)
18. OSの制限などで使えないデバイスがあれば、デバイスプールを修正する
![DeviceFarm026](https://user-images.githubusercontent.com/48610095/132938781-6fbdb278-6791-4ff7-8c7f-7ad48f7d368c.png)
19. 解決したらNext
![DeviceFarm027](https://user-images.githubusercontent.com/48610095/132938868-425ba89e-9f20-4699-bc6f-ba06a010a9be.png)
20. Confirm and start run でテスト開始
![DeviceFarm028](https://user-images.githubusercontent.com/48610095/132938919-21e43d20-b417-4284-ba2f-3c14f1f122c9.png)
