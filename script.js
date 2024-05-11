function calculateScore() {
    // Kullanıcının girdiği açık alan oranı
    const openSpaceRatio = parseFloat(document.getElementById('open-space-ratio').value);
    // Kullanıcının girdiği ormanlık alan yüzdesi
    const forestAreaRatio = parseFloat(document.getElementById('forest-area-ratio').value);
    // Kullanıcının girdiği ekili yeşil alan oranı
    const greenAreaRatio = parseFloat(document.getElementById('green-area-ratio').value);
    // Kullanıcının girdiği su tutucu olmayan yüzey oranı
    const absorptiveRatio = parseFloat(document.getElementById('absorptive-ratio').value);
    // Açık alanlar toplamının toplam kampüs nüfusuna bölümü
    const populationRatio = parseFloat(document.getElementById('population-ratio').value);
    // budgetRatio için gerekli değişkenleri tanımladım
    const totalBudget = parseFloat(document.getElementById('total-budget').value);
    const sustainabilityBudget = parseFloat(document.getElementById('sustainability-budget').value);
    // Cihaz verimliliği
    const deviceEfficiencyRatio = parseFloat(document.getElementById('energy-efficient-ratio').value);
    // Akıllı bina program uygulaması
    const smartBuildingProgramRatio = parseFloat(document.getElementById('smart-building-program').value);
    // Yenilenebilir Enerji
    const renewableEnergySources = parseFloat(document.getElementById('renewable-energy').value);
    // Yıllık toplam enerji tüketiminin toplam kampus nüfusuna bölümü için gerekli değişkenleri tanımladım
    const totalStudents = parseFloat(document.getElementById('total-students').value);
    const totalStaff = parseFloat(document.getElementById('total-staff').value);
    const totalEnergyConsumption = parseFloat(document.getElementById('total-energy-consumption').value);  //total-energy-consumption
    // Yenilenebilir Enerjinin Toplam Enerjiye oranı
    const renewableEnergyRatio = parseFloat(document.getElementById('renewable-energy-ratio').value);
    // Kullanıcının seçtiği yeşil bina öğe sayısı
    const greenBuildingElements = parseInt(document.getElementById('green-building-elements').value);
    // Yenilenebilir Enerjinin Toplam Enerjiye oranı
    const emissionReductionProgram = parseFloat(document.getElementById('emission-reduction-program').value);
    // Kişi başına karbon ayak izi hesaplama
    const carbonPerPerson = parseFloat(document.getElementById('carbon-per-person').value);
    // Geri dönüşüm programı
    const recyclingProgram = parseFloat(document.getElementById('recycling-program').value);
    // Kağıt plastik Azaltma
    const paperPlasticReduction = parseFloat(document.getElementById('paper-plastic-reduction').value);
    // Organik Atıkların işlenmesi
    const processingOrganicWaste = parseFloat(document.getElementById('processing-organic-waste').value);
    // INOrganik Atıkların işlenmesi
    const processingInorganicWaste = parseFloat(document.getElementById('processing-inorganic-waste').value);
    // Toksik Atıkların işlenmesi
    const processingToxicWaste = parseFloat(document.getElementById('processing-toxic-waste').value);
    // // Kanalizasyon Atıkları
    const kanalizasyonWasteDisposal = parseFloat(document.getElementById('kanalizasyon-waste-disposal').value);
    // Su tasarrufu uygulaması
    const savingWaterProgram = parseInt(document.getElementById('saving-water-program').value);
    // Su geri dönüşümü
    const waterRecycling = parseInt(document.getElementById('water-recycling').value);
    // Su verimli cihazlar
    const waterEfficientDevices = parseInt(document.getElementById('water-efficient-devices').value);
    // Şebeke suyu
    const sebekeSu = parseInt(document.getElementById('sebeke-su').value);



    // Açık Alan Puanı
    let openSpaceScore = 0;
    if (openSpaceRatio < 1) {
        openSpaceScore = 0;
    } else if (openSpaceRatio >= 1 && openSpaceRatio <= 70) {
        openSpaceScore = 0.25 * 300;
    } else if (openSpaceRatio > 70 && openSpaceRatio <= 85) {
        openSpaceScore = 0.50 * 300;
    } else if (openSpaceRatio > 85 && openSpaceRatio <= 92) {
        openSpaceScore = 0.75 * 300;
    } else if (openSpaceRatio > 92) {
        openSpaceScore = 1.00 * 300;
    }

    // Ormanlık Alan Puanı
    let forestAreaScore = 0;
    if (forestAreaRatio < 1) {
        forestAreaScore = 0;
    } else if (forestAreaRatio >= 1 && forestAreaRatio <= 2) {
        forestAreaScore = 0.25 * 200;
    } else if (forestAreaRatio > 2 && forestAreaRatio <= 9) {
        forestAreaScore = 0.50 * 200;
    } else if (forestAreaRatio > 9 && forestAreaRatio <= 22) {
        forestAreaScore = 0.75 * 200;
    } else if (forestAreaRatio > 22) {
        forestAreaScore = 1.00 * 200;
    }

    // Ekili Yeşil Alan Puanı
    let greenAreaScore = 0;
    if (greenAreaRatio < 1) {
        greenAreaScore = 0;
    } else if (greenAreaRatio >= 1 && greenAreaRatio <= 9) {
        greenAreaScore = 0.25 * 300;
    } else if (greenAreaRatio > 9 && greenAreaRatio <= 19) {
        greenAreaScore = 0.50 * 300;
    } else if (greenAreaRatio > 19 && greenAreaRatio <= 34) {
        greenAreaScore = 0.75 * 300;
    } else if (greenAreaRatio > 34) {
        greenAreaScore = 1.00 * 300;
    }

    // Su Emici Alan Puanı
    let absorptiveScore = 0;
    if (absorptiveRatio < 1) {
        absorptiveScore = 0;
    } else if (absorptiveRatio >= 1 && absorptiveRatio <= 2) {
        absorptiveScore = 0.25 * 200;
    } else if (absorptiveRatio > 2 && absorptiveRatio <= 14) {
        absorptiveScore = 0.50 * 200;
    } else if (absorptiveRatio > 14 && absorptiveRatio <= 29) {
        absorptiveScore = 0.75 * 200;
    } else if (absorptiveRatio > 29) {
        absorptiveScore = 1.00 * 200;
    }

   // Açık alanların toplamının toplam kampus nüfusuna bölümü
   let populationScore = 0;
   if (populationRatio < 1) {
       populationScore = 0;
   } else if (populationRatio >= 1 && populationRatio <= 3) {
       populationScore = 0.25 * 300;
   } else if (populationRatio > 3 && populationRatio <= 27) {
       populationScore = 0.50 * 300;
   } else if (populationRatio > 27 && populationRatio <= 83) {
       populationScore = 0.75 * 300;
   } else if (populationRatio > 83) {
       populationScore = 1.00 * 300;
   } 

   // Sürdürülebilirlik bütçesi oranını hesapla
   const budgetRatio = (sustainabilityBudget / totalBudget) * 100;
   let budgetScore = 0;
   if (budgetRatio < 1) {
       budgetScore = 0;
   } else if (budgetRatio >= 1 && budgetRatio <= 3) {
       budgetScore = 0.25 * 200;
   } else if (budgetRatio > 3 && budgetRatio <= 5) {
       budgetScore = 0.50 * 200;
   } else if (budgetRatio > 5 && budgetRatio <= 10) {
       budgetScore = 0.75 * 200;
   } else if (budgetRatio > 10) {
       budgetScore = 1.00 * 200;
   }

   // Cihaz verimliliği hesaplama
   let deviceEfficiencyScore = 0;
   if (deviceEfficiencyRatio < 1) {
       deviceEfficiencyScore = 0;
   } else if (deviceEfficiencyRatio >= 1 && deviceEfficiencyRatio <= 25) {
       deviceEfficiencyScore = 0.25 * 200;
   } else if (deviceEfficiencyRatio > 25 && deviceEfficiencyRatio <= 50) {
       deviceEfficiencyScore = 0.50 * 200;
   } else if (deviceEfficiencyRatio > 50 && deviceEfficiencyRatio <= 75) {
       deviceEfficiencyScore = 0.75 * 200;
   } else if (deviceEfficiencyRatio> 75) {
       deviceEfficiencyScore = 1.00 * 200;
   }

    // Akıllı bina program uygulaması hesaplama
    let smartBuildingProgramScore = 0;
    if (smartBuildingProgramRatio < 1) {
        smartBuildingProgramScore = 0;
    } else if (smartBuildingProgramRatio >= 1 && smartBuildingProgramRatio <= 25) {
        smartBuildingProgramScore = 0.25 * 300; 
    } else if (smartBuildingProgramRatio > 25 && smartBuildingProgramRatio <= 50) {
        smartBuildingProgramScore = 0.50 * 300;
    } else if ( smartBuildingProgramRatio> 50 && smartBuildingProgramRatio <= 75) {
        smartBuildingProgramScore = 0.75 * 300;
    } else if (smartBuildingProgramRatio > 75) {
        smartBuildingProgramScore = 1.00 * 300;
    }

    // Yenilenebilir enerji kaynakları
   let renewableScore = 0;
   if (renewableEnergySources <= 0) {
       renewableScore = 0;
   } else if (renewableEnergySources > 0 && renewableEnergySources <= 1) {
       renewableScore = 0.25 * 300;
   } else if (renewableEnergySources > 1 && renewableEnergySources <= 2) {
       renewableScore = 0.50 * 300;
   } else if (renewableEnergySources > 2 && renewableEnergySources <= 3) {
       renewableScore = 0.75 * 300;
   } else if (renewableEnergySources > 3) {
       renewableScore = 1.00 * 300;
   }


   $(document).ready(function(){   //Bu kod sayfa tamamen yüklendiğinde çalışacak olan fonksiyon tanımlar. Sayfa yüklendiğinde içindeki kodlar çalışır.
    $('#energyForm').submit(function(e){    //Bu kod HTML içindeki formun gönderilme işlemi tetiklendiğinde çalışacak olan işlevi tanımlar. $('#energyForm') ifadesi, id'si energyForm olan bir HTML formunu seçer. submit(function(e){...}) ifadesi, bu form gönderildiğinde çalışacak olan bir işlevi tanımlar. e parametresi, olay nesnesini temsil eder
        e.preventDefault();    //Bu satır, formun varsayılan davranışını engeller Yani, formun gönderilmesi işlemini durdurur. Bu, sayfanın yeniden yüklenmesini önler ve AJAX isteğinin gönderilmesine izin verir.
        var energyType = $('#energyType').val();   //formdaki enerji türü seçimi yapılır
        var capacity = $('#capacity').val();   //Bu kod, formdaki kapasite değerini alır. 
        $.ajax({    // Bu satır, jQuery AJAX işlevini başlatır. AJAX isteği, belirtilen URL'ye belirtilen verilerle birlikte gönderilir.
            type: 'POST',    //AJAX isteğinin HTTP POST yöntemi kullanılarak gönderilecek.
            url: 'save_data.php',    //AJAX isteğinin gönderileceği URL'yi belirtir. Burada, form verileri save_data.php dosyasına gönderilir.
            data: { energyType: energyType, capacity: capacity },    // AJAX isteğiyle gönderilecek verileri belirtir.
            success: function(response){    //AJAX isteği başarılı olduğunda çalışacak olan işlevi tanımlar. Sunucudan gelen yanıt response parametresiyle bu işleve aktarılır.
                $('#response').html(response); // AJAX isteği başarılı olduğunda mesajı göster
                // Ekranı temizle. Bu satırlar, form elemanlarının değerlerini boşaltır.
                $('#energyType').val('0');
                $('#capacity').val('');
            }
        });
    });
   });

   // Toplam Enerji Tüketimi
   const totalEnergyConsumptionPersonRatio = totalEnergyConsumption /(totalStaff + totalStudents) ;
   let totalEnergyConsumptionPersonScore = 0;
   if (totalEnergyConsumptionPersonRatio < 279) {
       totalEnergyConsumptionPersonScore = 1.00 * 300;
   } else if (totalEnergyConsumptionPersonRatio >= 279 && totalEnergyConsumptionPersonRatio < 633) {
       totalEnergyConsumptionPersonScore = 0.75 * 300;
   } else if (totalEnergyConsumptionPersonRatio >= 633 && totalEnergyConsumptionPersonRatio < 1535) {
       totalEnergyConsumptionPersonScore = 0.50 * 300;
   } else if (totalEnergyConsumptionPersonRatio >= 1535 && totalEnergyConsumptionPersonRatio < 2424) {
       totalEnergyConsumptionPersonScore = 0.25 * 300;
   } else if (totalEnergyConsumptionPersonRatio> 2424) {
       totalEnergyConsumptionPersonScore = 0;
   }

   //Yenilenebilir enerji hesaplama
   let renewableEnergyScore = 0;
   if (renewableEnergyRatio < 1) {
       renewableEnergyScore = 0;
    } else if (renewableEnergyRatio >= 1 && renewableEnergyRatio <= 25) {
       renewableEnergyScore = 0.25 * 200;
    } else if (renewableEnergyRatio > 25 && renewableEnergyRatio <= 50) {
       renewableEnergyScore = 0.50 * 200;
    } else if (renewableEnergyRatio > 50 && renewableEnergyRatio <= 75) {
       renewableEnergyScore = 0.75 * 200;
    } else if (renewableEnergyRatio > 75) {
       renewableEnergyScore = 1.00 * 200;
    }

    // Yeşil bina uygulama ögeleri
    let greenBuildingScore = 0;
    switch (greenBuildingElements) {
    case 0:
        greenBuildingScore = 0;
        break;
    case 1:
        greenBuildingScore = 0.25 * 300;
        break;
    case 2:
        greenBuildingScore = 0.50 * 300;
        break;
    case 3:
        greenBuildingScore = 0.75 * 300;
        break;
    default:
        greenBuildingScore = 1.00 * 300;
        break;
    }

    //emisyon azaltma
    let emissionReductionScore = 0;
    switch (emissionReductionProgram) {
    case 0:
        emissionReductionScore = 0;
        break;
    case 1:
        emissionReductionScore = 0.25 * 200;
        break;
    case 2:
        emissionReductionScore = 0.50 * 200;
        break;
    case 3:
        emissionReductionScore = 0.75 * 200;
        break;
    case 4:
        emissionReductionScore = 1.00 * 200;
        break;
    }

    //Kişi başına Karbon ayak izi hesaplama
    var carbonFootprintPerPersonScore = 0;
    switch (carbonPerPerson) {
    case 0:
        carbonFootprintPerPersonScore = 0;
        break;
    case 1:
        carbonFootprintPerPersonScore = 0.25 * 300;
        break;
    case 2:
        carbonFootprintPerPersonScore = 0.50 * 300;
        break;
    case 3:
        carbonFootprintPerPersonScore = 0.75 * 300;
        break;
    case 4:
        carbonFootprintPerPersonScore = 1.00 * 300;
        break;
    }

    // Üniversite atıkları için geri dönüşüm programı
    var recyclingProgramScore = 0;
    switch (recyclingProgram) {
    case 0:
        recyclingProgramScore = 0;
        break;
    case 1:
        recyclingProgramScore = 0.25 * 300;
        break;
    case 2:
        recyclingProgramScore = 0.50 * 300;
        break;
    case 3:
        recyclingProgramScore = 0.75 * 300;
        break;
    case 4:
        recyclingProgramScore = 1.00 * 300;
        break;
    }

    // Kampüste kağıt ve plastik kullanımını azaltma programı
    var paperPlasticReductionScore = 0;
    switch (paperPlasticReduction) {
    case 0:
        paperPlasticReductionScore = 0;
        break;
    case 1:
        paperPlasticReductionScore = 0.25 * 300;
        break;
    case 2:
        paperPlasticReductionScore = 0.50 * 300;
        break;
    case 3:
        paperPlasticReductionScore = 0.75 * 300;
        break;
    case 4:
        paperPlasticReductionScore = 1.00 * 300;
        break;
    }

    // Organik atıkların işlenmesi
    var processingOrganicWasteScore = 0;
    switch (processingOrganicWaste) {
    case 0:
        processingOrganicWasteScore = 0;
        break;
    case 1:
        processingOrganicWasteScore = 0.25 * 300;
        break;
    case 2:
        processingOrganicWasteScore = 0.50 * 300;
        break;
    case 3:
        processingOrganicWasteScore = 0.75 * 300;
        break;
    case 4:
        processingOrganicWasteScore = 1.00 * 300;
        break;
    }

    // İnOrganik atıkların işlenmesi
    var processingInorganicWasteScore = 0;
    switch (processingInorganicWaste) {
    case 0:
        processingInorganicWasteScore = 0;
        break;
    case 1:
        processingInorganicWasteScore = 0.25 * 300;
        break;
    case 2:
        processingInorganicWasteScore = 0.50 * 300;
        break;
    case 3:
        processingInorganicWasteScore = 0.75 * 300;
        break;
    case 4:
        processingInorganicWasteScore = 1.00 * 300;
        break;
    }

    // Toksik atıkların işlenmesi
    var processingToxicWasteScore = 0;
    switch (processingToxicWaste) {
    case 0:
        processingToxicWasteScore = 0;
        break;
    case 1:
        processingToxicWasteScore = 0.25 * 300;
        break;
    case 2:
        processingToxicWasteScore = 0.50 * 300;
        break;
    case 3:
        processingToxicWasteScore = 0.75 * 300;
        break;
    case 4:
        processingToxicWasteScore = 1.00 * 300;
        break;
    }

    // Kanalizasyon atıklarının bertarafı
    var kanalizasyonWasteDisposalScore = 0;
    switch (kanalizasyonWasteDisposal) {
    case 0:
        kanalizasyonWasteDisposalScore = 0;
        break;
    case 1:
        kanalizasyonWasteDisposalScore = 0.25 * 300;
        break;
    case 2:
        kanalizasyonWasteDisposalScore = 0.50 * 300;
        break;
    case 3:
        kanalizasyonWasteDisposalScore = 0.75 * 300;
        break;
    case 4:
        kanalizasyonWasteDisposalScore = 1.00 * 300;
        break;
    }

    // Su tasarrufu program uygulaması
    var savingWaterProgramScore = 0;
    switch (savingWaterProgram) {
    case 0:
        savingWaterProgramScore = 0;
        break;
    case 1:
        savingWaterProgramScore = 0.25 * 300;
        break;
    case 2:
        savingWaterProgramScore = 0.50 * 300;
        break;
    case 3:
        savingWaterProgramScore = 0.75 * 300;
        break;
    case 4:
        savingWaterProgramScore = 1.00 * 300;
        break;
    }

    // Su geri dönüşümü
    var waterRecyclingScore = 0;
    switch (waterRecycling) {
    case 0:
        waterRecyclingScore = 0;
        break;
    case 1:
        waterRecyclingScore = 0.25 * 300;
        break;
    case 2:
        waterRecyclingScore = 0.50 * 300;
        break;
    case 3:
        waterRecyclingScore = 0.75 * 300;
        break;
    case 4:
        waterRecyclingScore = 1.00 * 300;
        break;
    }

    // Su verimliliğine sahip cihazların kullanımı
    var waterEfficientDevicesScore = 0;
    switch (waterEfficientDevices) {
    case 0:
        waterEfficientDevicesScore = 0;
        break;
    case 1:
        waterEfficientDevicesScore = 0.25 * 200;
        break;
    case 2:
        waterEfficientDevicesScore = 0.50 * 200;
        break;
    case 3:
        waterEfficientDevicesScore = 0.75 * 200;
        break;
    case 4:
        waterEfficientDevicesScore = 1.00 * 200;
        break;
    }

    // Şebeke suyu
    var sebekeSuScore = 0;
    switch (sebekeSu) {
    case 0:
        sebekeSuScore = 0;
        break;
    case 1:
        sebekeSuScore = 0.25 * 200;
        break;
    case 2:
        sebekeSuScore = 0.50 * 200;
        break;
    case 3:
        sebekeSuScore = 0.75 * 200;
        break;
    case 4:
        sebekeSuScore = 1.00 * 200;
        break;
    }







   


    // Toplam Puanı Hesapla
    const totalScore = openSpaceScore + forestAreaScore + greenAreaScore + absorptiveScore + populationScore + budgetScore + 
    deviceEfficiencyScore + smartBuildingProgramScore + renewableScore + totalEnergyConsumptionPersonScore + 
    renewableEnergyScore + greenBuildingScore + emissionReductionScore + carbonFootprintPerPersonScore + recyclingProgramScore + 
    paperPlasticReductionScore + processingOrganicWasteScore + processingInorganicWasteScore + processingToxicWasteScore + 
    kanalizasyonWasteDisposalScore + savingWaterProgramScore + waterRecyclingScore + waterEfficientDevicesScore + sebekeSuScore;

    // Sonucu ekrana yazdır
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Toplam Puanınız: ${totalScore.toFixed(2)}`;

   
}



 


