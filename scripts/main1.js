

// obtain participant id
var participant_id;

// video and emotion sets
var video_num = Math.floor(Math.random() * 45);
var emotion_set_num = 3;
var emotionID = "emotion_question_set_" + emotion_set_num; // this is to be used to show which emotion question set 
var emotionID1 = "emotion_set" + emotion_set_num;

// url to google sheets database
const url = 'https://docs.google.com/spreadsheets/d/1AzWefwlFgMFbKTDs4v4JCS6OOeTz4V1tAIukYaZHbog/gviz/tq?';


var numComplete = 0; // a counter for progress bar and videos
var numTrials = 12; // total number of video trials is 12
var trial; // the specific video

// get the id to video object in html
var videoElement = document.getElementById("videoElement");


// web app sheets
//https://script.google.com/macros/s/AKfycbzbS2oqcF857NcXDgTAteA0xGbb-YqaUfwPUhnTvK90T_-uusT8OQaI7WRi944sI3Wc/exec


// instruction form- this is so that it wont link to another random page
window.addEventListener("load", function() {
  const form = document.getElementById('instruction_form');
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = new FormData(form);
    data.append('participant_id',participant_id);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
  });
});

// Appraisal form- this is so that it wont link to another random page
window.addEventListener("load", function() {
  const form = document.getElementById('my-form');
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = new FormData(form);
    data.append('video',trial);
    data.append('participant_id',participant_id);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
  });
});

// Emotion set 1- this is so that it wont link to another random page
window.addEventListener("load", function() {
  const form = document.getElementById('emotion_set1');
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = new FormData(form);
    data.append('participant_id',participant_id);
    data.append('video',experiment.videoData[numComplete-1]);
    console.log("video logged is", trial);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
    //.then(() => {
      //alert("Success!");
    //})
  });
});

// Emotion set 2- this is so that it wont link to another random page
window.addEventListener("load", function() {
  const form = document.getElementById('emotion_set2');
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = new FormData(form);
    data.append('participant_id',participant_id);
    data.append('video',experiment.videoData[numComplete-1]);
    console.log("video logged is", trial);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
    //.then(() => {
      //alert("Success!");
    //})
  });
});

// Emotion set 3- this is so that it wont link to another random page
window.addEventListener("load", function() {
  const form = document.getElementById('emotion_set3');
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = new FormData(form);
    data.append('participant_id',participant_id);
    data.append('video',experiment.videoData[numComplete-1]);
    console.log("video logged is", trial);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
    //.then(() => {
      //alert("Success!");
    //})
  });
});

// Demographic- this is so that it wont link to another random page
window.addEventListener("load", function() {
  const form = document.getElementById('demographics_questions');
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = new FormData(form);
    data.append('participant_id',participant_id);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
    //.then(() => {
      //alert("Success!");
    //})
  });
});



// validation check for participant ID
function validateComprehensionCheck() {
  let xy = document.forms['myForm']['identifier'].value;
  if (xy==""){
    alert("Please provide your Profilic ID");
    return false;
  } else {
    return true;
  }
};

// validate appraisals instructions
function validateComprehensionCheck_app_int() {
  if ($('input[name="instruct1"]:checked').val()!=null &&
      $('input[name="instruct2"]:checked').val()!=null &&
      $('input[name="instruct3"]:checked').val()!=null &&
      $('input[name="instruct4"]:checked').val()!=null &&
      $('input[name="instruct5"]:checked').val()!=null &&
      $('input[name="instruct6"]:checked').val()!=null ) {
      return true;
  } else {
      alert ( "For all questions, please click on any point on the associated 9-point scale." );
      return false;
  }
}

// validate appraisals
function validateComprehensionCheck_app() {
  if ($('input[name="ap1"]:checked').val()!=null &&
      $('input[name="ap2"]:checked').val()!=null &&
      $('input[name="ap3"]:checked').val()!=null &&
      $('input[name="ap4"]:checked').val()!=null &&
      $('input[name="ap5"]:checked').val()!=null &&
      $('input[name="ap6"]:checked').val()!=null ) {
      return true;
  } else {
      alert ( "Please answer all the questions." );
      return false;
  }
}

// validate emotion_set1
function validateComprehensionCheck_em1() {
  if ($('input[name="em1"]:checked').val()!=null &&
      $('input[name="em2"]:checked').val()!=null &&
      $('input[name="em3"]:checked').val()!=null &&
      $('input[name="em4"]:checked').val()!=null &&
      $('input[name="em5"]:checked').val()!=null &&
      $('input[name="em6"]:checked').val()!=null ) {
      return true;
  } else {
      alert ( "Please answer all the questions." );
      return false;
  }
}

//validate emotion_set2
function validateComprehensionCheck_em2() {
  if ($('input[name="em7"]:checked').val()!=null &&
      $('input[name="em8"]:checked').val()!=null &&
      $('input[name="em9"]:checked').val()!=null &&
      $('input[name="em10"]:checked').val()!=null &&
      $('input[name="em11"]:checked').val()!=null &&
      $('input[name="em12"]:checked').val()!=null ) {
      return true;
  } else {
      alert ( "Please answer all the questions." );
      return false;
  }
}

//validate emotion_set3
function validateComprehensionCheck_em3() {
  if ($('input[name="em13"]:checked').val()!=null &&
      $('input[name="em14"]:checked').val()!=null &&
      $('input[name="em15"]:checked').val()!=null &&
      $('input[name="em16"]:checked').val()!=null &&
      $('input[name="em17"]:checked').val()!=null &&
      $('input[name="em18"]:checked').val()!=null ) {
      return true;
  } else {
      alert ( "Please answer all the questions." );
      return false;
  }
}

function showSlide(id) {
    $(".slide").hide();
    $("#"+id).show();
  };

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

$("#progressBar").hide();
showSlide("instructions");

// Updates the progress bar
$("#trial-num").html(numComplete);
$("#total-num").html(numTrials);


var experimentInputParameters = {
    
  videos: [[
    //video 1
    "https://drive.google.com/uc?export=download&id=1h5zgrV-cyY3Xgzy9GPDt2XzXvwhNIfkc",
    "https://drive.google.com/uc?export=download&id=1nuSiv5f3ItZkDauGFxt49kEtjZUqWfcS",
    "https://drive.google.com/uc?export=download&id=1rbHVMd03MsOd9GODPT24KiN9VWv9Hxkp",
    "https://drive.google.com/uc?export=download&id=160Vzk5NvhI1B5-aeiZBRx1ZamJSMuZFr",
    "https://drive.google.com/uc?export=download&id=1YlYwj6XTs--Z04fY4kRQY0dP3L37HXRd",
    "https://drive.google.com/uc?export=download&id=1dIbR5wM3LmX5acXlq3E53MOphOv8rHXX",
    "https://drive.google.com/uc?export=download&id=1sybiAr1RTyQ1Eo3SqWbiYPlRPuZnvTkY",
    "https://drive.google.com/uc?export=download&id=1chLbP2zgUV_U-YRPWqRa5CVbK8PQYAvN",
    "https://drive.google.com/uc?export=download&id=1RhjM2t6wGAGg1P6ifPwzo9NkGUo0DZIg",
    "https://drive.google.com/uc?export=download&id=1e1C0JK8-tkJbhgOowPpInXcAjMrsM6Pv",
    "https://drive.google.com/uc?export=download&id=1BiAXYq8E-JN1h0T2M7FqCfu4YCD5ToDI",
    "https://drive.google.com/uc?export=download&id=1KWaU9zWIZ06y62tMdw5VBd282XATW93i"
      ],[
      //video 2
    "https://drive.google.com/uc?export=download&id=1-xVnvC8fn9fTRggFIpJpVLUBTldBVbrU",
    "https://drive.google.com/uc?export=download&id=1fcfHLVVh0ptEh6Iy8nNZsOnMlRCR0_HO",
    "https://drive.google.com/uc?export=download&id=1AreT2ZOqhGmiwPT9787OZPjD7VUGKUdZ",
    "https://drive.google.com/uc?export=download&id=1onxeZct9dtZpomcx8KB5Sy95Db5pxoEk",
    "https://drive.google.com/uc?export=download&id=1QuwwsnmP1wsGJKOzMRTWO9d_xlvFL1ua",
    "https://drive.google.com/uc?export=download&id=1cSmS3iEMBM55MRmjOuuLUht752w23VU7",
    "https://drive.google.com/uc?export=download&id=1md5_3UrFwm8ARZuyBLlHpAlFwcgPEwFD",
    "https://drive.google.com/uc?export=download&id=1QYpQX80FtGiyajoNypvxCKAmXxc9XlQM",
    "https://drive.google.com/uc?export=download&id=12pepk4PaxEzEy1qFjMyyM66vaOqqoDGi",
    "https://drive.google.com/uc?export=download&id=1l6vkBZfINxWLrE81tjkkq3cokD8fglV7",
    "https://drive.google.com/uc?export=download&id=1uDjqwwTylHlczLaDvDKpRavzjl2Libnc",
    "https://drive.google.com/uc?export=download&id=1ApgD69eqG68s7YiqVfqUdmOzbG8-MQpx"  
      ],[
        // video 3
    "https://drive.google.com/uc?export=download&id=1GLXsBlWWwtXwedatfFFmgDHgE3vY9qEr",
    "https://drive.google.com/uc?export=download&id=18b3jwbHP-hG0POwdaxYyQ2HFrPQNYk6-",
    "https://drive.google.com/uc?export=download&id=1sv2EfbRnn8fnqkbq4iIxmlkbBo7OWghG",
    "https://drive.google.com/uc?export=download&id=1le69ciHVhJ_pwowacbLY6l1echhspY-A",
    "https://drive.google.com/uc?export=download&id=1ky2-Yv8M9ED7lgzbeJZmf3GeOtKTP_RT",
    "https://drive.google.com/uc?export=download&id=1SE-oTerE0eZSSQVgQ2C6GvCc5WyLpI_x",
    "https://drive.google.com/uc?export=download&id=1nqpkTcd-o-vMax-3PDVN1qbBARTxq5tc",
    "https://drive.google.com/uc?export=download&id=1zXlw47BAUtGDM2uNlm_cAZd_30qpYC9S",
    "https://drive.google.com/uc?export=download&id=1IDoOD7Axwj16SgEORS8JweG8PyhOZVrn",
    "https://drive.google.com/uc?export=download&id=1cX-bZaOCMKggpLFxgwhV7tJJEugZc2CO",
    "https://drive.google.com/uc?export=download&id=1n_LoQcLP_rI9CfGS7RIW38ytE9o2x9aI",
    "https://drive.google.com/uc?export=download&id=1SCEcL0_9OvL0rmnaap6tdplu_cYEVmx6"
      ],[
        // video 4
    "https://drive.google.com/uc?export=download&id=17WuJmto7LSsGseEKxuuD9ZOuj9umQmgy",
    "https://drive.google.com/uc?export=download&id=1OT85Rjgo4WKqQECJj8fxCOaRe8ReBjHE",
    "https://drive.google.com/uc?export=download&id=1g4-acT3_LF9llEhIzP0iD8iY-KUL5u5W",
    "https://drive.google.com/uc?export=download&id=1eOFpbEDH9YiobReJJ6L3s4z0KkuWc3tF",
    "https://drive.google.com/uc?export=download&id=1M9WZ0E9pf0Gl1pJ7R74l4PamFIxzt8oM",
    "https://drive.google.com/uc?export=download&id=10nL9qmneWzgRuRE_7HJUTba0FfsDwKzV",
    "https://drive.google.com/uc?export=download&id=1-rFcMc8IYZ06_uHcqPXQUQK4AGhweBjE",
    "https://drive.google.com/uc?export=download&id=1rUgaUzKy6TrGgV8MvQ5X7e5cIu0bW40r",
    "https://drive.google.com/uc?export=download&id=1c_R3K26o5X79CMH1c4d5XH-xijfAq353",
    "https://drive.google.com/uc?export=download&id=1nylwtWNarRpiGIg2DM8haF6FPgmqiCmx",
    "https://drive.google.com/uc?export=download&id=1Uw5yUVT3jja_mrzKeaOBGnc9gZFEqrQd",
    "https://drive.google.com/uc?export=download&id=1IkIp943ABz8x4PMod8NhnnupKFcsWTnJ"
      ],[
        // video 5
    "https://drive.google.com/uc?export=download&id=1Cp7C2NA-FtVBLb7POccvyavmcCUWg5-O",
    "https://drive.google.com/uc?export=download&id=1W-aDszL3UxIhApRph6ayYgOhlZDAYiyT",
    "https://drive.google.com/uc?export=download&id=17ocLfb2F_Ef8bNwdwy3oweR_R1yGYhx0",
    "https://drive.google.com/uc?export=download&id=1cjgvAIt-x7s1X3uJQx4Rn0ob3Uw3w4qc",
    "https://drive.google.com/uc?export=download&id=13mlwK_6VEsU7eL829uEpP3njnwbP86yZ",
    "https://drive.google.com/uc?export=download&id=1xIvAdOAj3O_Zbdb1kydZnmg1-rB2mE4S",
    "https://drive.google.com/uc?export=download&id=1AgUXwBhZcIYEREDAtK8yBtQinsSktXGa",
    "https://drive.google.com/uc?export=download&id=1FKWE9beXWAklArlGSq_VBucLIIfHAsL2",
    "https://drive.google.com/uc?export=download&id=1zHXLnlrutiFR6PGmp95Zq3i3NYf-2gvY",
    "https://drive.google.com/uc?export=download&id=1v3KvKwtDD9sqC4peoQbunQJoUKM2juEo",
    "https://drive.google.com/uc?export=download&id=1QLap3BBS2tte_UVnyz4THTBksyaSgTgN",
    "https://drive.google.com/uc?export=download&id=18OTw3mCNNPPT-dPXLPscZK6GfWRJFQRO"
      ],[
        // video 6
    "https://drive.google.com/uc?export=download&id=12c8DHe-MfNL0VH2NTvJ02T1nMxRayqNN",
    "https://drive.google.com/uc?export=download&id=1aGdPjjQzJjUgfOev0EdqRYyIN0wYU5az",
    "https://drive.google.com/uc?export=download&id=1qOLDMjkR0VzkupSBd-q771gb0o_rIpgC",
    "https://drive.google.com/uc?export=download&id=1reMQ9aqVO9XhQFy0JaSDgcmHWLxudhpD",
    "https://drive.google.com/uc?export=download&id=1XBU0pd002pWPzir-6ihKMIP11MkZHvGw",
    "https://drive.google.com/uc?export=download&id=1NpPZTN9UqaTZHAZVY9Vwyc4_MNwIn4pN",
    "https://drive.google.com/uc?export=download&id=11mTRwjpeBtV7J-1ccZOw6tEW5cxL0xm6",
    "https://drive.google.com/uc?export=download&id=1k-0DAoHhh3RetsMa0Oc4wJSg-_ZcVJMH",
    "https://drive.google.com/uc?export=download&id=1gr22g3TNtAQmU7oz2gcCaH-5k9_3FbDv",
    "https://drive.google.com/uc?export=download&id=1rO87O7oWXdJFrLTB3Tc1GMVovAnKFLvh",
    "https://drive.google.com/uc?export=download&id=1Ba_Q6y0AkVDMmk4kXu0HiiIShP6ttMXI",
    "https://drive.google.com/uc?export=download&id=1etLhznc9s9TIgQj_8t8ATe-_Ws-tgP_-"
      ],[
        // video 7
    "https://drive.google.com/uc?export=download&id=1iXAL1BlGDH9v7qs7XveUeIO3oiQncnhk",
    "https://drive.google.com/uc?export=download&id=1wvVcSUKp8CORZiID5DBWHJblP7RfExJV",
    "https://drive.google.com/uc?export=download&id=1y3-SZ01mgL7iFNbAi2QD7BP9l5E3RDPt",
    "https://drive.google.com/uc?export=download&id=1tIogghzjMuzjZwUvL6bhXOgJsPpIq6wU",
    "https://drive.google.com/uc?export=download&id=1td6QcWsUX6hkW6rVIBt0811ZV3pQlMUM",
    "https://drive.google.com/uc?export=download&id=1QwMu8WeHGpEjELolAFdD8hR4D9M79iGk",
    "https://drive.google.com/uc?export=download&id=13FgzmbH5-cRvCwoFJKOZYSuk_S77oarr",
    "https://drive.google.com/uc?export=download&id=1MMqliQWCfBJS9sXQZSObkE4vnM9CFO9_",
    "https://drive.google.com/uc?export=download&id=1Tb1d6QdGdZ35UKLhj0rxo_OWs_Ngfdl0",
    "https://drive.google.com/uc?export=download&id=14LrbiE_zS2GVrYDTkYQUYDGL7-15zgGL",
    "https://drive.google.com/uc?export=download&id=1LzE1nbv0-o_lp1jEE4NhkE6v--QkKCPy",
    "https://drive.google.com/uc?export=download&id=12H61R_O5egwuqHuqPIrbXNMPuVMaa2dp"  
      ],[
        // video 8
    "https://drive.google.com/uc?export=download&id=1ihLj6jg9OIfuPcHmc6WuYFMC0-aQPXc7",
    "https://drive.google.com/uc?export=download&id=1qn4i-ZWkmXKoQVldwof8XfCoDGXbAjw7",
    "https://drive.google.com/uc?export=download&id=1AyrJPCaW0t_q-5-p4WhYhQMJtm8M9M6F",
    "https://drive.google.com/uc?export=download&id=1FBSbTMS6_uc0YxDI60-1xitp_NS28qRH",
    "https://drive.google.com/uc?export=download&id=1M2-MtLK5c3ZYKPeB3qNggL4tk9IAalhP",
    "https://drive.google.com/uc?export=download&id=1cTMt6B6fUb5R98AUMkuYqBA9byEQNzy_",
    "https://drive.google.com/uc?export=download&id=1pi5a-wHtLkJNZBwYxoQqseLy9qGb31ew",
    "https://drive.google.com/uc?export=download&id=1NV9BKEyM8b2kV9vbAyc-fRjcH-3z_uLm",
    "https://drive.google.com/uc?export=download&id=1fJmC6TLstVdBNXHoUUqzXlt8lqt5-wAR",
    "https://drive.google.com/uc?export=download&id=1RcmAo2Ho5JTJ3c0OwL6Ar1S7viv44BNd",
    "https://drive.google.com/uc?export=download&id=1U8uM9B2pG5EslphY3hoSE_teM8HFMXBL",
    "https://drive.google.com/uc?export=download&id=1JEfn0aFgNWa-evDNzrs91qJaVSQ-YYJF"
      ],[
        // video 9
    "https://drive.google.com/uc?export=download&id=13m9-pmHA4MTEly2Z_BkZkWf8OvTpev5k",
    "https://drive.google.com/uc?export=download&id=1Vp4tUs32r_xeXUXiGfgGTbZUywYanIq0",
    "https://drive.google.com/uc?export=download&id=1AkJkSFTO-L_yLEvJLtwkynPa6StCI8Le",
    "https://drive.google.com/uc?export=download&id=1VWVas_-2joa4k8Hg0JseXKXAejXSFk65",
    "https://drive.google.com/uc?export=download&id=1vNiQAMRPokBGjATYtEryEcFVTHBsK1Lq",
    "https://drive.google.com/uc?export=download&id=1WGcAy3p_zcUfOLFqVqRoPcYdrFcaSJs6",
    "https://drive.google.com/uc?export=download&id=1AKtYFLZmdcmUeDevXoesQMMQPVjx0gH5",
    "https://drive.google.com/uc?export=download&id=15-AbVMmfXxAomwcFBmIdbIPlkyBultl6",
    "https://drive.google.com/uc?export=download&id=1sxTm0jCVIRmMXSAQ98UUER5rVJ0xgZv0",
    "https://drive.google.com/uc?export=download&id=14ZExpEGeTJbpV4QZRrwBz1X1tOh_RMpD",
    "https://drive.google.com/uc?export=download&id=1XfTB3ZxHdZoWE81WpxQ3lR0ElAEYN5Mk",
    "https://drive.google.com/uc?export=download&id=1uCF3ad2MKwibfVJnssE_k267-0p6CJiE"
      ],[
        // video 10
    "https://drive.google.com/uc?export=download&id=1tH4eKdliP1CW46eEs0ApwiJBRAdX5tBd",
    "https://drive.google.com/uc?export=download&id=1X29Hx7aRqmylV0PeB0IQz8RkfFJX9jJl",
    "https://drive.google.com/uc?export=download&id=17gmRHMXWUkUAf749LFuKGrF305vjDrFE",
    "https://drive.google.com/uc?export=download&id=1PyYnVRwkxDPvpNb2lCVxla-tYrf_RHFg",
    "https://drive.google.com/uc?export=download&id=1V6My4taYM5rjxRho24INz_XA7GNoEchH",
    "https://drive.google.com/uc?export=download&id=1sAIfLMvGQeakdXAhXdO3lNP8NorWg5P0",
    "https://drive.google.com/uc?export=download&id=1qLcBCK0SRdxGSzb-mN-IGPPqUFUJDjqr",
    "https://drive.google.com/uc?export=download&id=18Udvgl9SWjhyNkf8frLRBXaLdPYbrIw6",
    "https://drive.google.com/uc?export=download&id=1EDLhOWhXnfS6wZ9g-vfhzdsnFR2NjYYO",
    "https://drive.google.com/uc?export=download&id=1AcUInFOJHblrmyHC3I_yjNLvUUtJGlnZ",
    "https://drive.google.com/uc?export=download&id=11XdZg5xrULkMhMnsM5GxUA229cAYPHoG",
    "https://drive.google.com/uc?export=download&id=1EUyhxIn6uwKIYg2-ZelHho3k9OL2c9SJ"
      ],[
        // video 11
    "https://drive.google.com/uc?export=download&id=1OPR1qAT7FvlGiTCrV2HsIceMNIuqpbdg",
    "https://drive.google.com/uc?export=download&id=13jP0pFt7-3fMVZlQMC3OVy1hnQM6CNwk",
    "https://drive.google.com/uc?export=download&id=1leF10sTS8Kx0Cf_u9dBRRJfNw15zbJFj",
    "https://drive.google.com/uc?export=download&id=1y6rEAqInlFBWOw60VkaNznFtjO0f2z4_",
    "https://drive.google.com/uc?export=download&id=1nxHuMTR0DwO6R-zzCRFe6h_3YIzBlfkV",
    "https://drive.google.com/uc?export=download&id=1VKBc_vox9ZtF9eVU6FdTobwSNQWZKBz4",
    "https://drive.google.com/uc?export=download&id=1eKt6Pq3vqNgODiYD7ghmOKMcuM1rtggL",
    "https://drive.google.com/uc?export=download&id=1sgxL8Q3AeZuEZjJP_27jIQ7dyzAvyAHx",
    "https://drive.google.com/uc?export=download&id=1jUbGtJjzPv1OFq4w3JyS_Z94-P_yk9qw",
    "https://drive.google.com/uc?export=download&id=14LrbiE_zS2GVrYDTkYQUYDGL7-15zgGL",
    "https://drive.google.com/uc?export=download&id=1LzE1nbv0-o_lp1jEE4NhkE6v--QkKCPy",
    "https://drive.google.com/uc?export=download&id=12H61R_O5egwuqHuqPIrbXNMPuVMaa2dp"
      ],[
        // video 12
    "https://drive.google.com/uc?export=download&id=1c234WUO1sjFnLHuPMJu00pNWBjjxjJpG",
    "https://drive.google.com/uc?export=download&id=1ASGiVCm7YcVud0q5UAK4U8Nmsxoirb4D",
    "https://drive.google.com/uc?export=download&id=14lzEoYJ82xsITBIe8T6mJQyiX50Bgl2n",
    "https://drive.google.com/uc?export=download&id=1fj-pVYMuVlwhmyOQ76O1n0sWH1clHenM",
    "https://drive.google.com/uc?export=download&id=169Q7oCdiC2j75T32IX8510X5N0cqRLQ5",
    "https://drive.google.com/uc?export=download&id=1Loc5hf2_1nqXoIYiKV5DLCNKG5Pkuq3F",
    "https://drive.google.com/uc?export=download&id=1bQKKytyGsCRvA8ugJWdt7OodjPq9zEA9",
    "https://drive.google.com/uc?export=download&id=1TBM2F6f_XQA-_SuuNm0FAmDZACKPyJji",
    "https://drive.google.com/uc?export=download&id=1dhJBLDwscVSI7_aVu5sbv_h86E7owLkf",
    "https://drive.google.com/uc?export=download&id=12nhnMh6JYGZKpLB1OrOS6BzJQ3BoVc12",
    "https://drive.google.com/uc?export=download&id=1T2vsbu78eXtuowQGV85kjlqcBl0a4MGy",
    "https://drive.google.com/uc?export=download&id=1jL_0ymctdG7PajQLZ5jWieGodqQllR15"
      ],[
        // video 13
    "https://drive.google.com/uc?export=download&id=1wuRFtJY1Tq16oVKxzH755AdW9UqG9m2v",
    "https://drive.google.com/uc?export=download&id=1AcqKATW8a6Xs8_O8hTHfJ39QFuMDWnAt",
    "https://drive.google.com/uc?export=download&id=1Ht_eH-AhJ21KLoKv8kb4vfhw17fqDigw",
    "https://drive.google.com/uc?export=download&id=1H7Ap1cvLjAS4DapUbbTrcIaRrvA0fl9m",
    "https://drive.google.com/uc?export=download&id=1Tqqu8c4xTctWKdX3YTWeqCGD7o7hihuI",
    "https://drive.google.com/uc?export=download&id=1yPkf0HRTQcEFpe1kK8Lpw6zeQsL9UYQ0",
    "https://drive.google.com/uc?export=download&id=1Ml4E7eKKfxhMO9X8uiTNDCeir3a_uWuc",
    "https://drive.google.com/uc?export=download&id=1OUMludySsdQ5TKozTB0pl-ilkoTo9V8i",
    "https://drive.google.com/uc?export=download&id=1qxJvOQdqbpy4VOb28-cpVLUkJrxvkaQw",
    "https://drive.google.com/uc?export=download&id=1QrDWGp7HgWVKS3XHJNxdcf7Sh64RLfG2",
    "https://drive.google.com/uc?export=download&id=1DRM0aqgjeA648-MeiGC7_pwE0-WQhjt4",
    "https://drive.google.com/uc?export=download&id=1G3Sh9UZ-eYM4cGOv6LkXxOhRf0WNdtXT"
      ],[
        // video 14
    "https://drive.google.com/uc?export=download&id=19Iu3-xNPOj_UnXnDvyXMOTAAo3wnDPMy",
    "https://drive.google.com/uc?export=download&id=1nr1DmWxYeweDD0DTcLvVflVmgPsY-yMg",
    "https://drive.google.com/uc?export=download&id=11RY3cptn0y9-vlhItfMjx-eySoolAFTI",
    "https://drive.google.com/uc?export=download&id=1CTd6Gs64MF-MkImt___D8JUVFcCB3ovC",
    "https://drive.google.com/uc?export=download&id=1vGUX5iaEMGcDAHoizqFtnXje5zNwnqZn",
    "https://drive.google.com/uc?export=download&id=1uuR2nAR4QheJbaIA1xy5pyAXYP8uSCId",
    "https://drive.google.com/uc?export=download&id=1U3RZruSvEeuShVlRmWE4ZiRTkanilaLc",
    "https://drive.google.com/uc?export=download&id=1knlv7aON8R3JGCm8MuZg65DUDz4szLCr",
    "https://drive.google.com/uc?export=download&id=1SLOYxhT8Y6LCkG7h6JTdbqrqMlwMc6qo",
    "https://drive.google.com/uc?export=download&id=14I_yDknW240TnhExLR1ONMylDaF5OyEk",
    "https://drive.google.com/uc?export=download&id=1i1dGAvt8M_G_snW376KB6CPxVOMrmRMI",
    "https://drive.google.com/uc?export=download&id=1ALNIjYlyKXzsK_9QEOnnG0abJUD1_zT2"
      ],[
        // video 15
    "https://drive.google.com/uc?export=download&id=1OZrtVG5gkkPUpgXR0Ho_nil-KrU0JoZ8",
    "https://drive.google.com/uc?export=download&id=1sMIwxZOu2rahYmnPmO8Tbc8PFF-LfqOp",
    "https://drive.google.com/uc?export=download&id=1eNf-FsbF1L0zFtKoNQrpxwlLnAMbzHcH",
    "https://drive.google.com/uc?export=download&id=1Iow0_JKOEYid9__Z1jqQ5MV_8FZcS3PI",
    "https://drive.google.com/uc?export=download&id=1EEnARGH9FWMaAGsEnVZ8Fo9-9JrYD3tX",
    "https://drive.google.com/uc?export=download&id=1dK87gUKVHwT0ys1BJAtcd92ds32C28Ko",
    "https://drive.google.com/uc?export=download&id=1kgyVHANQHKHD4dj7xFLe1X-IV1R1BBL5",
    "https://drive.google.com/uc?export=download&id=1uvFJ64yI2990ZTvsvWeriCUb5xha9iSr",
    "https://drive.google.com/uc?export=download&id=1VgzwGP32lYAGxvtA61wAqMImIgSZL_uZ",
    "https://drive.google.com/uc?export=download&id=1FyZkdiSNaU952BDDPXC_PZG4NczZvqo5",
    "https://drive.google.com/uc?export=download&id=1Y4QYNazmwJIR5ybPV8KqYq4yhaeA5feY",
    "https://drive.google.com/uc?export=download&id=1pAcbfqKr1df8x2fYAL62lNjXXkHMSEH6"
      ],[
        // video 16
    "https://drive.google.com/uc?export=download&id=1pOkuEZrl_tC4BPE8SuUVDAMAvpdAY1VS",
    "https://drive.google.com/uc?export=download&id=12CiXoKdb_eFCC7FGdsOEFJPE5iAF2Jz9",
    "https://drive.google.com/uc?export=download&id=1CQCG3xVWlwDEu57GNKJa1RoFyHvz0-A5",
    "https://drive.google.com/uc?export=download&id=1HfZDJyqeVip9jFQ-d7BaPDipD7fvWPlS",
    "https://drive.google.com/uc?export=download&id=17CKKGMWYTbUar0Vb0T7QIINILh1nMPC9",
    "https://drive.google.com/uc?export=download&id=1C_abaPMz7aVbD7ke5lLghyGeG1Wnasmi",
    "https://drive.google.com/uc?export=download&id=1HmInKQv35A2JKFThLiK26-05AowJezpu",
    "https://drive.google.com/uc?export=download&id=1HBtzQBlZu0MNf3m71Of8uRi5ST5B9J7S",
    "https://drive.google.com/uc?export=download&id=1VxzjBPxtV_Lar3S9enhpTKGuPjPAA1pA",
    "https://drive.google.com/uc?export=download&id=1DqDNzrwUmPSf98INLRwkfjjpuTY55eFn",
    "https://drive.google.com/uc?export=download&id=191BV9DtFucrNW5y0G_8cRlNB2kUG3xEb",
    "https://drive.google.com/uc?export=download&id=1SxMoR9hAHuIOLeP3KG75AdQpGqZdIkQY"
      ],[
        // video 17
    "https://drive.google.com/uc?export=download&id=16DRMzMyjTQMlNaDId5Hq9erSnhVjdAsj",
    "https://drive.google.com/uc?export=download&id=1Rw9zVlrk_u_HPUe0L0bvT5_9SFSoqn6G",
    "https://drive.google.com/uc?export=download&id=1NRxqpEU7SpUbJ3xQTpxKAEtxUYVLmRqy",
    "https://drive.google.com/uc?export=download&id=1SKm6E0QqEKOLZyd5mi2Wl75LK_0IFHfF",
    "https://drive.google.com/uc?export=download&id=1BnSchdio9MtGJN51R0N9bRWmGTlqXDYI",
    "https://drive.google.com/uc?export=download&id=1HBtWQBgWjxJDLfGtXSQjPOKEaiSqDTQZ",
    "https://drive.google.com/uc?export=download&id=1cd5Hpg5mqiglBZ_1I3Jy_f_d2WkwvpvO",
    "https://drive.google.com/uc?export=download&id=153TWRozfxQajYYd8fFS4ys6ak7AWPvuh",
    "https://drive.google.com/uc?export=download&id=1SdxfhA03ASX6j8aqyTwjrUbPBDg45HYq",
    "https://drive.google.com/uc?export=download&id=1sYClFPlBRrz1satlcQHQjIGsd3ioc-r-",
    "https://drive.google.com/uc?export=download&id=1KAyJHfpOl_RJF7sSbryBjeerWqCJzjYX",
    "https://drive.google.com/uc?export=download&id=1hBPLMxFp5h6FXIAf2gnge7BSXdEmI1LK"
      ],[
        // video 18
    "https://drive.google.com/uc?export=download&id=1CcvL_oGWVQ5bpM18DIAoYf2ReHTryaPR",
    "https://drive.google.com/uc?export=download&id=1f4feUfEqjyPvpM8lO8pTlz8ESaDQm61R",
    "https://drive.google.com/uc?export=download&id=15uqNq28TXrFZ5PLlpIe0wFzlbtUtp-CV",
    "https://drive.google.com/uc?export=download&id=1OpbSvnAXSWSkRPaO0P4SHEcFbQ3mrnQx",
    "https://drive.google.com/uc?export=download&id=1eLQ5wvdOIM0NpUHPBpFHOx51u-nGnlr4",
    "https://drive.google.com/uc?export=download&id=1qyLgFVla_3zdzwRgGfHf_LVYHxnIiTOO",
    "https://drive.google.com/uc?export=download&id=1YxCkbO_34jQ7lrXqDC4nGWQRJm3_rjHr",
    "https://drive.google.com/uc?export=download&id=1PdQS81hvl19iRGnVLcXGmtf9mne01IqL",
    "https://drive.google.com/uc?export=download&id=1kecePj1qlRsoocDy1QhT8AN7U2M2DQsb",
    "https://drive.google.com/uc?export=download&id=1TBZKLgfI78Ps-3JUj88YyJZjyUwFLr30",
    "https://drive.google.com/uc?export=download&id=10II_51HcOi-3MK4_veKXGPO_0hvClBQN",
    "https://drive.google.com/uc?export=download&id=1rqMfXDV6zIvueKWB49B9fS0_DCm4fu06"
      ],[
        // video 19
    "https://drive.google.com/uc?export=download&id=1ptJ7xCSG2feLHMGXJ8E_iUrJCyiZWawB",
    "https://drive.google.com/uc?export=download&id=14UZFAqVKmftle-44PLcJWPvJfeUDBbsm",
    "https://drive.google.com/uc?export=download&id=1c6d_IJJzMClJuamAWtMeXGvCzlHMSn_4",
    "https://drive.google.com/uc?export=download&id=1ZpJVY9wbHcjjE-32VVwTQWARYqMP2aYn",
    "https://drive.google.com/uc?export=download&id=1KEZJTGhcovuWeKKe37A8822CPSV1CTw-",
    "https://drive.google.com/uc?export=download&id=1MTbvIWNQXDUTZlmP0SGMF59xO3zjTyXO",
    "https://drive.google.com/uc?export=download&id=1eYIvj4kAtUEJP26hznAmJ7z-MXzHC5cD",
    "https://drive.google.com/uc?export=download&id=1WnJk4CiaoF7FRoF4OjIk4_IfuYkP0ncB",
    "https://drive.google.com/uc?export=download&id=1pv1Ivoo_jyPXR1Ae0p1p0G86j8C35Kec",
    "https://drive.google.com/uc?export=download&id=1taowGz8C9rVp6ZukuNo6zAWnuq3sN-28",
    "https://drive.google.com/uc?export=download&id=1Cp7bE1IKitxcLgCKUrWz4mfnhmXpV9uh",
    "https://drive.google.com/uc?export=download&id=1QksjhiN94TmwnIQP35jZ6-oWZjOkKis9"
      ],[
        // video 20
    "https://drive.google.com/uc?export=download&id=1IhxgGi_8Y2g6l6QmVswxDnW2ai5JD4Ja",
    "https://drive.google.com/uc?export=download&id=1A8gs1HL5ktGRhpNi_v_WIWcA0OYhcH8k",
    "https://drive.google.com/uc?export=download&id=1hwwZXC15XeFrGl8M-G2Q-jnZOlddyKO7",
    "https://drive.google.com/uc?export=download&id=1HEGr-21su-auO5kqI--TsNy5Vgy_b41Q",
    "https://drive.google.com/uc?export=download&id=1jTiLaxfwkiuFHCI3jFEjy0sLvOAYgKnG",
    "https://drive.google.com/uc?export=download&id=1kTYgCj3yC-4wGANck0Y-YCgfXhIsUYx8",
    "https://drive.google.com/uc?export=download&id=16VZWDepLSE5pjfDoDsALIeBCMj5sZzmX",
    "https://drive.google.com/uc?export=download&id=1aBUumJ2Psl2lEpIjn4XNGCsb07KJOfcC",
    "https://drive.google.com/uc?export=download&id=168YPMwajdUHl0N6Kkv_Rci8o--f9opH_",
    "https://drive.google.com/uc?export=download&id=1jubeHPLzEUbJd9BGIKtOj--zNlxrkfmF",
    "https://drive.google.com/uc?export=download&id=1iOpmgpDLrzjYtx1Q60exqlbplwXzSGgE",
    "https://drive.google.com/uc?export=download&id=1CMC4kDTR7GYj8H0wHVmyM3xZdr0fT7LF"
      ],[
        // video 21
    "https://drive.google.com/uc?export=download&id=1kQS5Qcto-wwneWG8ah43IlTzksZyzPIe",
    "https://drive.google.com/uc?export=download&id=1zzYB6RdP_A8c48PjzGtro9OUz8uKVCk0",
    "https://drive.google.com/uc?export=download&id=1a3Dk1mFQhbXVUA77q_D784ShjqNXWGtd",
    "https://drive.google.com/uc?export=download&id=11vy5tK82R7KyRrXiDRwcxN-fED5EfW6q",
    "https://drive.google.com/uc?export=download&id=1A5h73oMgMi9eviuec-MaMieaU1dCTF6C",
    "https://drive.google.com/uc?export=download&id=1YIO77rYEDHXYiK0vUBUSbn9a57Dlz49g",
    "https://drive.google.com/uc?export=download&id=1OWZ7M_tUCD2o_DLgpI2F0DTvwQXt8fZE",
    "https://drive.google.com/uc?export=download&id=1EkjGxdw6f-Eg6-FqNZOS4G-TaddxuoNP",
    "https://drive.google.com/uc?export=download&id=1K3cz3T80eCCyrG7w40EUuhwEbzARB_MY",
    "https://drive.google.com/uc?export=download&id=1_ZaXWn19XuvdzVCMIAROqgkQjqMwneWy",
    "https://drive.google.com/uc?export=download&id=1oLgz7B1RKyd2fDUqRhiWf89pLnrI-lnL",
    "https://drive.google.com/uc?export=download&id=1TpiVGQ2EvTdCJxbu_kcVSNN7Ty92Q09W"
      ],[
        // video 22
    "https://drive.google.com/uc?export=download&id=1O-oDDGcixBcpIUlRQy9rvIxVQYCn2d_R",
    "https://drive.google.com/uc?export=download&id=1kBOlFvrobNjvcuwTsDpZPNcxjqFb_EsH",
    "https://drive.google.com/uc?export=download&id=1JKhTl9CcWpUNVTnKvLEYIkxIKFu0DFUp",
    "https://drive.google.com/uc?export=download&id=1vWY7nUe7K4W90HI8Q3HsofsHxTaTYu74",
    "https://drive.google.com/uc?export=download&id=1aI8qaAZIWaOyKy14hcCsx52-DuUWNP3v",
    "https://drive.google.com/uc?export=download&id=1p-OJgU9SudykcwbaAAXkW8LOulKlVwNS",
    "https://drive.google.com/uc?export=download&id=1WoMI8OPp5mTG_bv8W0pjMXWXPQFyBA2b",
    "https://drive.google.com/uc?export=download&id=11X52bAWBLw9por2dpf803qokHitBLCFw",
    "https://drive.google.com/uc?export=download&id=1_CG0MeqI6bvO9cAPatYknylAUHE3x-wN",
    "https://drive.google.com/uc?export=download&id=1veI4vzMspPrAZjSN51AX9EqiePFf0Epl",
    "https://drive.google.com/uc?export=download&id=13aUStHZNfluDWXoTZKkXZIecarT4OAQD",
    "https://drive.google.com/uc?export=download&id=13FGNYy4HPl3wOYZc7UddzIoEFPVQsomC"
      ],[
        // video 23
    "https://drive.google.com/uc?export=download&id=1shPApAKk8P3dUKe00Dj_ojULIHWOAjrJ",
    "https://drive.google.com/uc?export=download&id=17y0KR4zh-pIx3VmIdd5TskozvxT48Jff",
    "https://drive.google.com/uc?export=download&id=1j6ZzSuiIUlSmbARK1p_TAB-WARnRfPvQ",
    "https://drive.google.com/uc?export=download&id=1kbJ02Ms4cBu30bsTIrGFueW55QQMPcWw",
    "https://drive.google.com/uc?export=download&id=10Yctn-eI0EYMEnKn_vSbljLPdnmVmYEc",
    "https://drive.google.com/uc?export=download&id=1ZElmkDWvPukcTJB_F5I-ofrhQsVC_4yx",
    "https://drive.google.com/uc?export=download&id=15707wBccc30p47vOzrkcX6D8Nilr3pVi",
    "https://drive.google.com/uc?export=download&id=1gTo-Wa0pCeKLU1McfmPs5vfgu2XTZjnf",
    "https://drive.google.com/uc?export=download&id=1S-piRn64i6gA8ngptqqyMnJM2Pe8tOI-",
    "https://drive.google.com/uc?export=download&id=1NCn-WaA456opFOLvfwrJpp-lLcdux-vc",
    "https://drive.google.com/uc?export=download&id=1A1CjXPM1MCKgXdpBwgvFKxQiHcbawVkr",
    "https://drive.google.com/uc?export=download&id=1QJZEoWP4zcASWmNAKmwsj1yCikLdGbqb"
      ],[
        // video 24
    "https://drive.google.com/uc?export=download&id=1jodxwH109iCXcFryhdGjjEnLpftGW9nC",
    "https://drive.google.com/uc?export=download&id=1QwJGpGBiBCZt7GIpa7dBl6bFnRa8U-an",
    "https://drive.google.com/uc?export=download&id=1GGyPFNR20Z0NpvRqp-ScK2Qo28drK1SR",
    "https://drive.google.com/uc?export=download&id=10KLakXQ2pZj8Mrs2sRhL0PChaf4MPiAZ",
    "https://drive.google.com/uc?export=download&id=1KUb2oUBiqE-3h39l8G92gevHPe5zRN5-",
    "https://drive.google.com/uc?export=download&id=1KH83uUUxLe78xOblZ06fvqqm5k3yFkn5",
    "https://drive.google.com/uc?export=download&id=1R5jY1Fa4WkNlMkGBLVc80Q-Eu9i8leO7",
    "https://drive.google.com/uc?export=download&id=1gEGmjQva6b1IqmxOYz6EuegR3zQ7tIXS",
    "https://drive.google.com/uc?export=download&id=1fnm9ozgGqHbKbWguhGgW-YtqlIkuJVHV",
    "https://drive.google.com/uc?export=download&id=1YspfDqGVzpBbZbEeEgE6UQt6iq6JW023",
    "https://drive.google.com/uc?export=download&id=12xofkoOI7H18tQkzzYprFXIPqlMH4oVl",
    "https://drive.google.com/uc?export=download&id=11Xtj1B4pAU5NTzHpWthHMDZqQGpmZxrk"
      ],[
        // video 25
    "https://drive.google.com/uc?export=download&id=1z1FSFGVQeUhWPg_D4xz1l_aVTUg0RIlO",
    "https://drive.google.com/uc?export=download&id=12vlllYAoL_b4YoXLqyjnjZA-3NqI3G1O",
    "https://drive.google.com/uc?export=download&id=1Swd3gYnVG1mObmUss9btRFk0D9yg2ACy",
    "https://drive.google.com/uc?export=download&id=1mShUsEZ8C1-x-hmaFL16HFfloqegGiSe",
    "https://drive.google.com/uc?export=download&id=12Ixoag2VdXv_THZP58Pf6dW8-Rbd6MaE",
    "https://drive.google.com/uc?export=download&id=1NwOSAL3S_SRfX6prxQ20-Qu_TAAdfgFg",
    "https://drive.google.com/uc?export=download&id=1V0M2jLlJtL6H1TFNw4wBI0RpYUIGibOZ",
    "https://drive.google.com/uc?export=download&id=11aZLq9y0jZKsRXWpZ52oQ04o_m0zZLth",
    "https://drive.google.com/uc?export=download&id=1Iy8Md0HPM3AZlx3qhuSXSxz_5aFdC93t",
    "https://drive.google.com/uc?export=download&id=1AkXj3h1YQWjy9EEh3WtVobcjAUwaniDf",
    "https://drive.google.com/uc?export=download&id=1FysZ3UBoLYMLud-tWWjRGu9j3GwnggvW",
    "https://drive.google.com/uc?export=download&id=10K0PlDWwnL_AFUHFttF7jdBoO0x2VXLu"
      ],[
        // video 26
    "https://drive.google.com/uc?export=download&id=1sJG2BoO41X52Cjlp8MT9xLfNvbngovkr",
    "https://drive.google.com/uc?export=download&id=1IC81YVjKSbPSUkoP95lSdDLK8Ao8qkEo",
    "https://drive.google.com/uc?export=download&id=16s7Yw_PFqZugf4QhSEFCr0F_QCW3LbZb",
    "https://drive.google.com/uc?export=download&id=1ujaEFU3YuGICL3ZD0FbFNG_-j-7LkWNs",
    "https://drive.google.com/uc?export=download&id=1ke2d_sYdhPjkRSbZz9LFmKZxh1McUJxC",
    "https://drive.google.com/uc?export=download&id=13DK403cy-Gjh9PrTgOjJljjcSPvNJcY7",
    "https://drive.google.com/uc?export=download&id=1qxma5EjMQ6e0a-TRV1Pof89w2-BajX4V",
    "https://drive.google.com/uc?export=download&id=1Zx7sNGH-PMY91p2Ev4_X7OP-QUWTlDW4",
    "https://drive.google.com/uc?export=download&id=1AYuFy0jmW6GFZ4UfJZpx-5wkJ4Xbv5Bi",
    "https://drive.google.com/uc?export=download&id=1ahJgqcKCldlZBYq46ZhnC3DTIJVbvWId",
    "https://drive.google.com/uc?export=download&id=1AHIlzRaJnl1SL9tQfOoksgWT5MbQym6h",
    "https://drive.google.com/uc?export=download&id=1OH0d-GbVj5lfyto03WdZ64yp_v66NiHJ"
      ],[
        // video 27
    "https://drive.google.com/uc?export=download&id=1bJldpTWfesSPi5PIILfZRq6-x9ckwwR1",
    "https://drive.google.com/uc?export=download&id=1CUqf0qgnl0wa1B-U27jfNH9iLrrQ4qP0",
    "https://drive.google.com/uc?export=download&id=1d5oHzmF_9e8t2htWjUdmHX-B9XfUQ2Bk",
    "https://drive.google.com/uc?export=download&id=17N2b4A-yD0T0FPO1mu94xbbruKNo3z1h",
    "https://drive.google.com/uc?export=download&id=1IqemyaZ9mLqxyf5DASS6w9mzB9mnTMxN",
    "https://drive.google.com/uc?export=download&id=1kGE8lAdRESiDjseE3hWWLXyhkRudgw6F",
    "https://drive.google.com/uc?export=download&id=1fjsbBnJpkIgkdiZ4vEBrBqkDJtVBoc4P",
    "https://drive.google.com/uc?export=download&id=1byW6qBLJRe-UVqaEjPIVYOjSx1NrHDrM",
    "https://drive.google.com/uc?export=download&id=102KRRT8I69R8GiVAKzwwGbs-f9aaYvM-",
    "https://drive.google.com/uc?export=download&id=1w9xzobo5mIzMM8XQl9JWDI26mfAVVn7l",
    "https://drive.google.com/uc?export=download&id=1myYtSmemcZsYuH_KqWnB6TDcd_56OlQj",
    "https://drive.google.com/uc?export=download&id=1_CRErUIzFIq2jB2iytMYPV8NtDd2IhRs"
      ],[
        // video 28
    "https://drive.google.com/uc?export=download&id=1H7nFnNvu8UQdP2RfG0a-57L4zhC99glX",
    "https://drive.google.com/uc?export=download&id=1pqhOcJ4w5Wj7UV98MOyjXCQxrwind_VQ",
    "https://drive.google.com/uc?export=download&id=1TUmAfZljCDG2VCVJMZJZfyWGyWtLQrIs",
    "https://drive.google.com/uc?export=download&id=10bDU7rvA5hRtvpltse9EC8z-kEMvtcWe",
    "https://drive.google.com/uc?export=download&id=1uBGeRFqGOW8foFaj6N9H5CW0Z17XiSit",
    "https://drive.google.com/uc?export=download&id=1cQXlLUqOwPWcpOFrmNZ8EpwwCFuXDfAb",
    "https://drive.google.com/uc?export=download&id=1uRf8wGaa8WTJFY5O-LUpyQgn9JVAX9Cr",
    "https://drive.google.com/uc?export=download&id=1ulG6P_P3EXYh-3xiqV6GYi9jnMYxzJjJ",
    "https://drive.google.com/uc?export=download&id=1ueZA9Cf2l-Rgbei5DcCP0a3eqZcY53dr",
    "https://drive.google.com/uc?export=download&id=1P0kWlz7HgrVY4uP7o_vUVn4QUcYw1-er",
    "https://drive.google.com/uc?export=download&id=1Bvo7h4ZFtglidKIYJpF655_hSHHhjsrU",
    "https://drive.google.com/uc?export=download&id=1v99edgQVjDzaCTDPs4Z-a47lUPaEca_q"
      ],[
        // video 29
    "https://drive.google.com/uc?export=download&id=1ECqymwPnUp-f6XZkBdu7gjlGgY7NJS1Q",
    "https://drive.google.com/uc?export=download&id=1OobIDwOEY5HeHvZIbehWzoizRT4IH1El",
    "https://drive.google.com/uc?export=download&id=14kinoVHE7Ur3G-FtdAcGKa6C_hSQsKLk",
    "https://drive.google.com/uc?export=download&id=1MTo868j336gEPbXs-lxUrVEcVPqYHUjE",
    "https://drive.google.com/uc?export=download&id=1fSszsRBi2zyBPAukgyBu-gBu4WRpDagl",
    "https://drive.google.com/uc?export=download&id=1yX_xragBiPHBu4oExv98euagDJiAeKi0",
    "https://drive.google.com/uc?export=download&id=1fqX6Jkh2Z4073MHHpFrayFPNQrHsKumt",
    "https://drive.google.com/uc?export=download&id=1XqN4hR_KjKQMr8FtsVzfqP0JjYqMcRov",
    "https://drive.google.com/uc?export=download&id=1iuCmI38uqQqJOj6SpPY0KvIS-qb6Rnxi",
    "https://drive.google.com/uc?export=download&id=1cD5R-nrfP7zuGN4t8O8MepnEBOTF3AJB",
    "https://drive.google.com/uc?export=download&id=1JReZK5yfenOMOy0Rr0N74PJqnQCkQ2wA",
    "https://drive.google.com/uc?export=download&id=11sufM3LgzsMdAdsFqBrlBV-eazfVjxBA"
      ],[
        // video 30
    "https://drive.google.com/uc?export=download&id=1-XuW0WRuNyMRSh5Mba0U9MZ9LJ-LsQnk",
    "https://drive.google.com/uc?export=download&id=1Cpcs_H8VOrC30ynM03KPlN_d76WulFCp",
    "https://drive.google.com/uc?export=download&id=1DGK30SVsV-R00GAVgugPI0_-C7mxpvah",
    "https://drive.google.com/uc?export=download&id=1xLm4PWmtZJ-6ar2rJPjh04gT5xTNrJn8",
    "https://drive.google.com/uc?export=download&id=1N0Uz4YRj8Bs3xDROe5yzlxpIo38u4geD",
    "https://drive.google.com/uc?export=download&id=1tzhK1xEerA4gJX6rUYNI84M9wS_II4Tr",
    "https://drive.google.com/uc?export=download&id=1xBi0QBWGiQzBgF3z9AwhLn2ySTRwQstc",
    "https://drive.google.com/uc?export=download&id=1epOHVGRLIZm0xjRyJPQANl6F8ejwxf-E",
    "https://drive.google.com/uc?export=download&id=1QeuLjUzDajQSSnLiD0fO7IDvoXhjKYAL",
    "https://drive.google.com/uc?export=download&id=1QPT2An4RBFqMC0ETU2R5ARA72ps8piop",
    "https://drive.google.com/uc?export=download&id=1n3vXkHpSjagSx2srDcW7aX3fbv1gp67i",
    "https://drive.google.com/uc?export=download&id=1IhqxXt8YgQ3QAdk71sMXkY_b7E70POJ0"
      ],[
        // video 31
    "https://drive.google.com/uc?export=download&id=1xZEJFJm9Q57Wa4lfmtofm8m89YKpfkOW",
    "https://drive.google.com/uc?export=download&id=17x3oZNA1vwcFL68KZs1IycCXpcDJoxmj",
    "https://drive.google.com/uc?export=download&id=1s7CTa14sDIEwoNFbh94KQYbu9JaVSH3u",
    "https://drive.google.com/uc?export=download&id=1st_guNd_9EX2ialyb8_ME_YiXkTKQ3ju",
    "https://drive.google.com/uc?export=download&id=19DjVeenXQj7EMrW7A1RQXUZje1pdsgAm",
    "https://drive.google.com/uc?export=download&id=18M9g_qalr_LKm193jYV4T246ZiexqPjP",
    "https://drive.google.com/uc?export=download&id=1hg2fbx_PXjlucGjIkoqiBymWoSPVygbK",
    "https://drive.google.com/uc?export=download&id=1e9YGtLvu_FaaBzVrii9aOsSIKuJuOteu",
    "https://drive.google.com/uc?export=download&id=1NywfZrekWbY5ppHSu30sE-jmuttuVhgc",
    "https://drive.google.com/uc?export=download&id=1Ksa5h5pTmT1zv0699I9_4jiwtcWSUWJD",
    "https://drive.google.com/uc?export=download&id=1LtEe9bF2Em5nLVskhlWnt1KwNN3ZCfXY",
    "https://drive.google.com/uc?export=download&id=1iNWPQ-3xpJ7IiOa2cw-Nv_R37d1UL4rv"
      ],[
        // video 32
    "https://drive.google.com/uc?export=download&id=1KUQ8ZXtjOL-HQmwhzq9K3b1QFM7uUlEC",
    "https://drive.google.com/uc?export=download&id=1DegH0wW9d4mA8Q4qLu8Z7Cf27POLns7W",
    "https://drive.google.com/uc?export=download&id=15u-CTu0g_4vW0yrkjW15mzymuRhH9pkp",
    "https://drive.google.com/uc?export=download&id=1JiTmop1RGWYfEEGKzVCYEQczxCVMWoee",
    "https://drive.google.com/uc?export=download&id=1I2gxwi7Mvr2q9byePnqneXUTivmLT5VI",
    "https://drive.google.com/uc?export=download&id=1aaOAaZ02Kh2jVKyuTHG_yKK5JEdK0vgF",
    "https://drive.google.com/uc?export=download&id=1o3dfOtJp6kOvY8yJDirufpCxLzqppZND",
    "https://drive.google.com/uc?export=download&id=1XL4eTRbHnwFDxWzt8yKNj_-tPtxsf8oq",
    "https://drive.google.com/uc?export=download&id=1USRrGPXg7gOdgxqBzeBcPkKMHftM61W5",
    "https://drive.google.com/uc?export=download&id=1AbGdjGO4f5-fBxDwcRAIKwm54ofLJ9Dn",
    "https://drive.google.com/uc?export=download&id=1U6uqi7BydXpNT-rvvs0MJzx7U9W6wLfx",
    "https://drive.google.com/uc?export=download&id=1OZDfIjkfac_5lCq2Dkg6VWZgLssSG-CW"
      ],[
        // video 33
    "https://drive.google.com/uc?export=download&id=12xI2ym0Bys1JAjVodv0NyER8h047sGjk",
    "https://drive.google.com/uc?export=download&id=1YOc0F40RSyusQ1g7zNrVrKBAAPcIxb8m",
    "https://drive.google.com/uc?export=download&id=1qGUE6YzYQ-nEudj8cZCe7Bk6DDrpNpnx",
    "https://drive.google.com/uc?export=download&id=1bbk54J_ZBWc3jBlZbxPA2qw2C_4ht9b7",
    "https://drive.google.com/uc?export=download&id=1-HHa0MMFshZ0U4n1eRcjogRtCw1swXhq",
    "https://drive.google.com/uc?export=download&id=1ixBS3ceFbdu3XAp3fLfFdEUxE5yZ4z2u",
    "https://drive.google.com/uc?export=download&id=191N7TZgz7PeR6Q-hQ-C-0uFMqmE3l6B5",
    "https://drive.google.com/uc?export=download&id=1Qk-8zrMM4C_U4DM5VPiRSPVrEB3Zp_Xb",
    "https://drive.google.com/uc?export=download&id=1fwtfZcDLG6AFqyZ4pKTJb-0TCJTFX_vg",
    "https://drive.google.com/uc?export=download&id=1wRknG7zcO73eRYD9OArhgKRSbB6sMUaj",
    "https://drive.google.com/uc?export=download&id=1JbmYN6okM_r0mKCEXpuBCqFuFWljhQjO",
    "https://drive.google.com/uc?export=download&id=1FeaaHh7ypgfq1m2ZznvtL49Qnb6h-Q9o"
      ],[
        // video 34
    "https://drive.google.com/uc?export=download&id=1vkTZM44di9hJ0L2smZQt9Kfp83-bS69f",
    "https://drive.google.com/uc?export=download&id=1PTWEs1TqDvhjYD44mkkhfgP-nl7coR7u",
    "https://drive.google.com/uc?export=download&id=1aD_Nm7wqLv1qgKgWbVrpdlpO8Ql0GyIi",
    "https://drive.google.com/uc?export=download&id=1kRRSyEg_3bp3ZycP8C7ZpfSttuRahx_P",
    "https://drive.google.com/uc?export=download&id=1UILmLEkembin2ClgxJq3sTyIf1e3mfd3",
    "https://drive.google.com/uc?export=download&id=1azLUS5w1-jOQIfVh_k2vp0udcUcuQ6oF",
    "https://drive.google.com/uc?export=download&id=1U-8HPhgkhbO0TGdjufTL7tUpDCzGiuit",
    "https://drive.google.com/uc?export=download&id=1CzQOdPyffc4zrtIOsT3pm3oSM4gGCJze",
    "https://drive.google.com/uc?export=download&id=1-F_0Vf9ZuvJfuCskulSW97c9W4t3OkCN",
    "https://drive.google.com/uc?export=download&id=1PQgZRowSVP-ZreX1KtYglhVhcCmVO7J5",
    "https://drive.google.com/uc?export=download&id=1IiNhsHTwQA7D_HJdMYBXDDezj4MwdZMW",
    "https://drive.google.com/uc?export=download&id=1jMgvh8ib4vzMnD_SV6j51_MiSgWxEujK"
      ],[
        // video 35
    "https://drive.google.com/uc?export=download&id=1WwEraWkAGnqdRt8wszOYnWAMXgiJs409",
    "https://drive.google.com/uc?export=download&id=1SpiKe9GCEDWD67K5nvcP4nia7_qIxS3b",
    "https://drive.google.com/uc?export=download&id=14mp1AgvLovVIMG854Jb-ZaIXh4mE95NP",
    "https://drive.google.com/uc?export=download&id=1q9HNmK9BVAvcUMCb8Wzu4gTZYJ31ZkGj",
    "https://drive.google.com/uc?export=download&id=1l3vNWnNuqRJhl-S9iRwWzTYsarEssA73",
    "https://drive.google.com/uc?export=download&id=1vfan4aICtNhirAOOyx2HirL06Uq-x9mA",
    "https://drive.google.com/uc?export=download&id=1QbbYmM7QFbv9lVbJ0DQYZTZytma1Dg_F",
    "https://drive.google.com/uc?export=download&id=1ksRvWQ1bN4j46gl4Rf_d1vyAOneuHuFE",
    "https://drive.google.com/uc?export=download&id=17fbvnIy8ixUTPEP4hX6G2Uzf3TlIbLrq",
    "https://drive.google.com/uc?export=download&id=1WQvjC-3p_j2fk8QCYgiN7nuFiN0BU99d",
    "https://drive.google.com/uc?export=download&id=1Eh6EQKnFLwemlYLV9NM0eN6wVmejcjSe",
    "https://drive.google.com/uc?export=download&id=1Xba4c1A03kl1s7Fkjz7jTb5GvplSHRj7"
      ],[
        // video 36
    "https://drive.google.com/uc?export=download&id=1OGHz1bKFQ4Osn5eKBuegjVwzJ6f4aXVU",
    "https://drive.google.com/uc?export=download&id=1Ye8bonoEow-YWnq1lMAvn8JjuUDk4B55",
    "https://drive.google.com/uc?export=download&id=1ldhRLUgJma6A0VOKYqhr6Yj0LmyW9HKP",
    "https://drive.google.com/uc?export=download&id=1lXwg5XU2EM7ut8lkN_T_0a6bE2cJec4l",
    "https://drive.google.com/uc?export=download&id=1S9XqfwTRtZ9qTFNXxcKlOpa-eDZeIv-k",
    "https://drive.google.com/uc?export=download&id=18bZMVUXEsPbywxBa4hERKrjyMW7BhTKH",
    "https://drive.google.com/uc?export=download&id=1y9xj9x4urUNO0aR0U8fQ_XlDk2BrI3TL",
    "https://drive.google.com/uc?export=download&id=1R9EwNevS0e0A9sCoBZUhp_NofBke9HdT",
    "https://drive.google.com/uc?export=download&id=1FObg2BYkOku1NcTmPKf9ULEI_TkNbiTH",
    "https://drive.google.com/uc?export=download&id=1gFa_uf6AhX3x8fS9-Pdiv5jhK0l8rY8-",
    "https://drive.google.com/uc?export=download&id=112HB0UbOVzmJZ6DXa9UEcyDuqEbh74R8",
    "https://drive.google.com/uc?export=download&id=1yfso2UF_-pGS1-S2Y_Lzv8v9zwWy9PtI"
      ],[
        // video 37
    "https://drive.google.com/uc?export=download&id=1n-SHRMZZ40I8Qc3ZTbwlfRzxoJFChxCP",
    "https://drive.google.com/uc?export=download&id=1y32N205GuTQlEXIYY8uq9PaolZwKq9Yi",
    "https://drive.google.com/uc?export=download&id=1yoGuycJrZjgHn47iocnMn6Bq9lpNXu8Q",
    "https://drive.google.com/uc?export=download&id=11qRM79_Hrl9UonqBk2xGTPyn3xuftjBe",
    "https://drive.google.com/uc?export=download&id=1AnwArMauo3r2GDdYQk_xSG7qcbwS-4RJ",
    "https://drive.google.com/uc?export=download&id=11Mr7OT2rwrbRMu8CnwdP9VthxuWfdt9e",
    "https://drive.google.com/uc?export=download&id=1sanl93CQ21Y___u8H17veV8DU8xhQejd",
    "https://drive.google.com/uc?export=download&id=1n2D8dzqeBj9aCySTHJp6eXbQGM-J9D26",
    "https://drive.google.com/uc?export=download&id=13CSSMK5g8096WMb1v9E-hwE7tK1JVdfn",
    "https://drive.google.com/uc?export=download&id=1lhnL2ivWh1MZt5LfThub75Gbt9scHVNU",
    "https://drive.google.com/uc?export=download&id=1yjDZJ2kL8IQ26eJwXFYMZKtL6rN_XG01",
    "https://drive.google.com/uc?export=download&id=1WCqSAGSyE0WXX7BfXX84YFZPC1GFzko_"
      ],[
        // video 38
    "https://drive.google.com/uc?export=download&id=1tvX3RBeX6uR7fwPNbrDrtiFkfki_eZnF",
    "https://drive.google.com/uc?export=download&id=1SeK01aKrUyNNELOAOcnAspX1B9yTgHF7",
    "https://drive.google.com/uc?export=download&id=1idGRJ0VZS7uVRipNRGiR7DgJjtgo4aO4",
    "https://drive.google.com/uc?export=download&id=1xrsC3gpk7tv1atwTwCXOOp9V2jUQfD3O",
    "https://drive.google.com/uc?export=download&id=1H5bA8_z7VZ9leBsYFmb7Cye8Kt16hcez",
    "https://drive.google.com/uc?export=download&id=14k9Du7QHqlQvqIgnOhaNwpCJKqOxHMJA",
    "https://drive.google.com/uc?export=download&id=10DybGJJfHbtn2HQM6iwoW6rSmMnvV0uU",
    "https://drive.google.com/uc?export=download&id=1AaL5o-43qIN73dG_LuwJ4gFsz1IoRWHn",
    "https://drive.google.com/uc?export=download&id=1sfurh43NfaeLu37PO9QTPw3HCzwrilon",
    "https://drive.google.com/uc?export=download&id=1ENfawEpEC1ZrmQ2IV7BCsXie_Gu5znQx",
    "https://drive.google.com/uc?export=download&id=1dUqJOBs39RcTrqU3NslaKDa9FmdXUgth",
    "https://drive.google.com/uc?export=download&id=1tC22_52vmNQGN5e8TT23nHVjbPWqh6Q9"
      ],[
        // video 39
    "https://drive.google.com/uc?export=download&id=1NMGZ5a4ol7qp_HYxQO_OqcuQuRWJ6qBH",
    "https://drive.google.com/uc?export=download&id=1DsefseCPQ2RZsaAYhMsK1J33KQ30_RPO",
    "https://drive.google.com/uc?export=download&id=1g6DkvCVWJTQZVb5X5-4Ey8TQ2W0sTXVS",
    "https://drive.google.com/uc?export=download&id=1YRuxsu7PukMsKb_iFvCbm3wxQmm3viqt",
    "https://drive.google.com/uc?export=download&id=1GwYx2MByZGBXwU2LfN8xRFvFHJQaDTl7",
    "https://drive.google.com/uc?export=download&id=1-EQrt_CvKtF3iwy6Pc0Z4DJlWvA9PpMo",
    "https://drive.google.com/uc?export=download&id=1zpEHWvc2tFGge8HTc6_-8yYamYB4vHpQ",
    "https://drive.google.com/uc?export=download&id=1_636vq60j0pI_x770cI75uMETAmMcRZ8",
    "https://drive.google.com/uc?export=download&id=1PdJOjYItsSjxbI1EW8DX7XbpE6SqG0FT",
    "https://drive.google.com/uc?export=download&id=1h4L1IJAXWaMWxnYhRGRkERAXlJqz5tjw",
    "https://drive.google.com/uc?export=download&id=1qIbg-4PQ5EAhiufRmvvbi7ivBzzJuftL",
    "https://drive.google.com/uc?export=download&id=16LcPTB6SdObvJwJWU10hrSLm0yfUzOSD"
      ],[
        // video 40
    "https://drive.google.com/uc?export=download&id=13opNCItQvq1aqcoH8sMs3weTdl5KLYrj",
    "https://drive.google.com/uc?export=download&id=1sAtz4IGfqdZYLJWFu_BohiRVA8eabq1H",
    "https://drive.google.com/uc?export=download&id=1lxH5ImLiocXavpawJKY4vm9V1QQ5clPM",
    "https://drive.google.com/uc?export=download&id=1b_kgnOG3P1mglyR9lZsd5y-LEIIRqs_S",
    "https://drive.google.com/uc?export=download&id=1pCd9vV1SH30fg2oEn3vrHc_xyiJZ9rJA",
    "https://drive.google.com/uc?export=download&id=1LpqU4Rg1jBgCR1B7YXhBlalW1qZd5Ywi",
    "https://drive.google.com/uc?export=download&id=1LONDDyCr2IWGG3s5lY2oUFlnhhLTKAK6",
    "https://drive.google.com/uc?export=download&id=15or72NUd157ZUDzpnWn02iJmrNq5VoWg",
    "https://drive.google.com/uc?export=download&id=1DTz_UB2o7l6thPJhZuOvwmcAY3-zfnvC",
    "https://drive.google.com/uc?export=download&id=14SPHrkFsOz_YSxam1B30b-4Hq337UCHN",
    "https://drive.google.com/uc?export=download&id=1bV53bfouxeIaU6mv5Gcn7xNLJj_YVnrk",
    "https://drive.google.com/uc?export=download&id=1F-dKFWJVCerzRrFfAc1Eb_zhGL6YUeyf"
      ],[
        // video 41
    "https://drive.google.com/uc?export=download&id=1mP5t_GY-JoQW7qKJNqPA13E3Wbw_p8X7",
    "https://drive.google.com/uc?export=download&id=1i0wTA0MAk1EqmjwDR4y0UxhbCddwA28x",
    "https://drive.google.com/uc?export=download&id=1SzcOg91BMVCvJa0HLqVderD2QVNNDB-N",
    "https://drive.google.com/uc?export=download&id=1XobBoRB92KXdJjFW8oxRxY3j0YXTND4w",
    "https://drive.google.com/uc?export=download&id=13io0pwja3VwVnUYzR7eCizusIxqJsF9x",
    "https://drive.google.com/uc?export=download&id=15Yd8KFiD_kZuEQTtrp31JZd6iaeQD982",
    "https://drive.google.com/uc?export=download&id=10tJWEH-qwSLDw9_InCE6xzJ7Q0coKeDl",
    "https://drive.google.com/uc?export=download&id=1db6dXVoZoaRJVMebyuXS1fKkoBhCT23b",
    "https://drive.google.com/uc?export=download&id=1ici0JFsvm24Fb6-B1Itl7lQ0EEaKvl1Z",
    "https://drive.google.com/uc?export=download&id=1W2KWl-QvEzJKeV-TWotIuqF1zOlhnN-b",
    "https://drive.google.com/uc?export=download&id=1R7LXWsKbjPv1gU_-CBBr82m3W9YVIo59",
    "https://drive.google.com/uc?export=download&id=1LSWLya931VqBY0D6PPe10CsIDBCpsJWK"
      ],[
        // video 42
    "https://drive.google.com/uc?export=download&id=1ej6GKqfmhJwZwqFoFaYcZnaljirBiOfa",
    "https://drive.google.com/uc?export=download&id=1GuPZAaNQjrhghL9N4G62xrG3ERgGs5Y4",
    "https://drive.google.com/uc?export=download&id=1U4tfUF5dBGGzbSiquUwawjQITA93wGWz",
    "https://drive.google.com/uc?export=download&id=1dMew29K3k1Joa8DZWka-Be9Xo2eHctBn",
    "https://drive.google.com/uc?export=download&id=1MNNzeVu8mCxeFPgIKTHzdu9fd4gNFDbu",
    "https://drive.google.com/uc?export=download&id=1ztYBfnmXSuO3rVRwXmqpU4ztdoDco7Hy",
    "https://drive.google.com/uc?export=download&id=1y8BDeXYNE1E9XFsdTbhb5O3doncEi2Ti",
    "https://drive.google.com/uc?export=download&id=1KUsKq7QuM4AUKF7olzkbwRw59bJ_J4Mm",
    "https://drive.google.com/uc?export=download&id=1jiQ2U2y0eCAmH7O7Yl9jzLqsTJ32DdLm",
    "https://drive.google.com/uc?export=download&id=1K-j2uOjT1wQlOLPdfsit25o-buokxCAs",
    "https://drive.google.com/uc?export=download&id=1znk3KRQ9NfIV4Jw-KRsHQ-wA7uPGIkAo",
    "https://drive.google.com/uc?export=download&id=1Fc9Gk_r3ZedJSTZbxlVgtY76_RjyGVzd"
      ],[
        // video 43
    "https://drive.google.com/uc?export=download&id=1E4XqCl1nyqnyZd9Y97ovtzlnzKhQaWUf",
    "https://drive.google.com/uc?export=download&id=1hT_pN4wbnBRWDHNYcs7MGIEC5p69SyKO",
    "https://drive.google.com/uc?export=download&id=1BuJWiDSsFwr75rK72rfBpIpsdpV71rV1",
    "https://drive.google.com/uc?export=download&id=1qQQI7--jwNPKCtD5aKDO6oInWejJL2Ec",
    "https://drive.google.com/uc?export=download&id=1FMeZfooBWqIKoRVwqP8GmCn75YiXWZK1",
    "https://drive.google.com/uc?export=download&id=15xiDf4NhMnBGPANd1ao-kTT-JMfj8gxb",
    "https://drive.google.com/uc?export=download&id=1b_-WMxClviz6k83WgOL0JFBU4J0-1RoD",
    "https://drive.google.com/uc?export=download&id=1m3hcDKGmEXOdHD1AsLIsdwLRpXt6kmJm",
    "https://drive.google.com/uc?export=download&id=1cDmibT6iT8-ZN3DvPkxEOfKpmRN9Hf5A",
    "https://drive.google.com/uc?export=download&id=1HZ9-XaS5-zVPtUxJw18VBdewUZLnIBMa",
    "https://drive.google.com/uc?export=download&id=1Zi7BLb-e18pZKnmqcf-mWm5fAdszhas9",
    "https://drive.google.com/uc?export=download&id=1WXOZzFDfC65rW7-UzzoIdDHLQFIdux0E"
      ],[
        // video 44
    "https://drive.google.com/uc?export=download&id=1zsJL7ykUDMXatWEvDvnSXINNKHCOtMdZ",
    "https://drive.google.com/uc?export=download&id=1UWy9CGStTBGzXNvl5rjDHvNTC4f3BFje",
    "https://drive.google.com/uc?export=download&id=1bEB_ZUS_6W8o2j36lDUSy7R3KPx-h501",
    "https://drive.google.com/uc?export=download&id=1qapOg2EDtFzHnIgyejSpgdRhs1Vvw_Td",
    "https://drive.google.com/uc?export=download&id=1W3JBRC5UMmN9HY0HI-08Qtx51V2snlGm",
    "https://drive.google.com/uc?export=download&id=1yQH_iFg35yDR5zgghyb3dRPiDia8j3bt",
    "https://drive.google.com/uc?export=download&id=1jyCpwhHIk9-s38EIAnPumuQlCYVsfp7T",
    "https://drive.google.com/uc?export=download&id=1d_FdJZ926krpFdl_jbGSASbGbF-UaC3L",
    "https://drive.google.com/uc?export=download&id=1JkafKQ9HcndMdjhV7l7UfSWbhW2bwcaI",
    "https://drive.google.com/uc?export=download&id=1HZ9-XaS5-zVPtUxJw18VBdewUZLnIBMa",
    "https://drive.google.com/uc?export=download&id=1Zi7BLb-e18pZKnmqcf-mWm5fAdszhas9",
    "https://drive.google.com/uc?export=download&id=1OJqUy0HIz09ljaXTcdcom-znEYdtOmzA"
      ]]

}

 // the main experiment object that 
var experiment = {

  //videoGroup: Math.floor(Math.random() * (2 - 1 + 1) + 1),
  videoData: [],
  
  participant_information: function() {
  $("#progressBar").hide();
  showSlide("participant_information");
  },

  description: function() {
    showSlide("description");
    $('html, body').scrollTop(0);
    console.log("video set is :", video_num)
    experiment.videoData = experimentInputParameters.videos[video_num];
    participant_id = document.getElementById('identifier').value;
    console.log("experiment video data",experiment.videoData);
  },

  video: function() {
    if (numComplete >= numTrials){
      showSlide("demographics");
      $('.bar').css('width', (200.0 * numComplete/ numTrials ) + 'px');
      $("#trial-num").html(numComplete);
      $("#progressBar").show();
    } else{
      //Prevent seeking of video
      var video = document.querySelector('video');
      var supposedCurrentTime = 0;
      video.addEventListener('timeupdate', function() {
        if (!video.seeking) {
          supposedCurrentTime = video.currentTime;
        }
      });
      video.addEventListener('seeking', function() {
      // guard agains infinite recursion:
      // user seeks, seeking is fired, currentTime is modified, seeking is fired, current time is modified, ....
      var delta = video.currentTime - supposedCurrentTime;
      if (Math.abs(delta) > 0.01) {
        console.log("Seeking is disabled");
        video.currentTime = supposedCurrentTime;
      }
      });

      // only show the next button when the video has been done playing
      document.getElementById("next_button_video").style.visibility = "hidden";
      var video = document.querySelector('video');
      video.addEventListener('ended', (event) => {
        console.log('video has stopped');
        var button = document.getElementById("next_button_video");
        console.log(button);
        button.style.visibility = "visible";      
      });
      showSlide("video");
      $('.bar').css('width', (200.0 * numComplete/ numTrials ) + 'px');
      $("#trial-num").html(numComplete);
      $("#progressBar").show();
      console.log('num',numComplete);
      console.log("experiment video data",experiment.videoData);
      trial = experiment.videoData[numComplete];
      console.log('trial',trial);
      //videoPath =  "video_segments/"+ trial;
      videoElement.setAttribute("src", trial);
      videoElement.load();
      //numComplete++;
    }
  },

  questions: function(){
    showSlide("table_questions");
    document.getElementById("my-form").reset(); // reset the form
    console.log("appraisal video",numComplete);
  },

  emotion: function(){
      showSlide(emotionID);
      $('html, body').scrollTop(0);
      //document.getElementById("emotion_set1").reset(); // reset the form
      document.getElementById(emotionID1).reset();
      console.log("emotion video",numComplete);
      numComplete++;
  },

  end: function(){
    showSlide("finished");
    $('html, body').scrollTop(0);
  }


}

