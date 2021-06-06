# interviewProject

## Proje içeriği
**Context Api**, **React navigation v5(nesting navigators)** ve **axios** gibi paketlerin bir arada kullanıldığı bir uygulama.<br/>
Uygulamada 3 adet ekran bulunmaktadır. Reusable component kullanımı örneklendirmek amacı ile components klasörü içerisinde<br/> 
Custom **Button** ve **Input** bileşenleri bulunmaktadır. Bu bileşenler **login** sayfasında ki **email** ve **password** girdilerinde kullanılmıştır.<br/>

### Login
Kullanıcının email girdisi, regex yardımıyla email formatına uygun girilmesi sağlanıyor. Bunun dışında **maxLength** parametresi ile girdi<br/> 
için karakter sınırlandırılmıştır. Kullanıcı girdileri **Context API** yardımıyla global state e yazılıyor burada **isSignedIn**<br/>
durumu ile kullanıcının login olma durumu simule edilmiştir. Kullanıcı login olduktan hemen sonra **Home** sayfasına yönlendirilir.<br/>
Burada girilen **email**, **password** ve login olma durumunu görebilirsiniz.<br/>Login olma durumu **true** ya döndüğü için
**Login** sayfasında sadece **Sign out** butonu return edilir.<br/><br/>
Kullanıcı çıkış yaptıktan sonra girilen veriler sıfırlanır, login olma durumu tekrardan **false duruma düşer** ve sayfa eski haline tekrar döner.

### Axios
Axios veri istemcisidir. Bazı postların olduğu bir api'den axios yardımyla verilerimizi getiriyoruz. Daha sonra gelen verileri **Flatlist** yardımıyla listeliyoruz.

### Kurulum
**!!! Macbook veya Iphone bir cihaza sahip olmadığım için, bu proje android taradında geliştirildi ios için gerekli implementasyonlar yapılmadı ve test edilmedi :)<br/>**
`$ npm install` komutu ile gerekli node_modules dosyasını indirin.
Ardından `$ react-native start` ve `$ npx react-native run-android` ile android cihazda çalıştırabilirsiniz.

### Notlar
Gelen kullanıcı verileri farklı sayfalarda kullanılacaksa bu verileri de **Context api** yardımıyla global state e eklenebilir.<br/>
Kullanıcı uygulamadan çıktıktan sonra verileri silinecektir. Bu yüzden verilerin asenkron depolama ile tutulması gerekebilir.
Bu ve kullandığım diğer kaynaklar:<br/>
[Navigation](https://reactnavigation.org/docs/getting-started/)<br/>
[Vector Icons](https://github.com/oblador/react-native-vector-icons)<br/>
[Context API](https://blog.devgenius.io/react-native-state-management-with-context-api-61f63f5b099)<br/>
[Axios](https://www.npmjs.com/package/axios)<br/>
[Asenkron depolama](https://react-native-async-storage.github.io/async-storage/docs/install/)<br/>



