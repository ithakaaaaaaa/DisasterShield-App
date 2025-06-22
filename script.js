function showFloodInfo() {
  const info = `
    <ul style="padding-left: 1.2em; line-height: 1.8em;">
      <li>📍 <b>Move to higher ground immediately.</b><br>
          ⛰️ <i>সাথে সাথে উঁচু স্থানে চলে যান।</i></li>

      <li>🏫 <b>Nearby safe zones in Feni:</b><br>
          🔸 Feni Government College (ফেনী সরকারি কলেজ)<br>
          🔸 Alia Madrasa, Feni (আলিয়া মাদ্রাসা, ফেনী)<br>
          🔸 Feni Zilla School (ফেনী জিলা স্কুল)<br>
          🔸 Shilpakala Academy Hall (শিল্পকলা একাডেমি হল)</li>

      <li>🎒 <b>Carry essentials like water, torch, rope, and documents.</b><br>
          🧳 <i>পানি, টর্চ, দড়ি ও গুরুত্বপূর্ণ কাগজপত্র সঙ্গে নিন।</i></li>

      <li>💧 <b>Check water depth before moving or walking.</b><br>
          🌊 <i>চলার আগে পানির গভীরতা পরীক্ষা করুন।</i></li>

      <li>📞 <b>Call 999 if someone is stuck or injured.</b><br>
          ☎️ <i>কেউ বিপদে পড়লে ৯৯৯-এ কল করুন।</i></li>
    </ul>
  `;
  toggleInfo("floodInfo", info);
}


function showCovidInfo() {
  const info = `
    <ul style="padding-left: 1.2em; line-height: 1.7em;">
      <li>😷 <b> Wear masks in crowded places.</b> <br>
          🧣 <i>জনাকীর্ণ স্থানে মাস্ক পরুন।</i></li>
      <li>🧼 <b>Wash hands with soap every 2 hours.</b> <br>
          🧽 <i>প্রতি ২ ঘণ্টা পরপর সাবান দিয়ে হাত ধুয়ে নিন।</i></li>
      <li>🙅‍♀️ <b>Avoid touching your face.</b><br>
          ✋ <i>মুখ, চোখ, নাক ছোঁয়া থেকে বিরত থাকুন।</i></li>
      <li>🏥 <b>Report symptoms to local health workers.</b> <br>
          🩺 <i>উপসর্গ দেখা দিলে স্থানীয় স্বাস্থ্যকর্মীদের জানান।</i></li>
    </ul>
  `;
  toggleInfo("covidInfo", info);
}


function showHygieneInfo() {
  const info = `
    To make a DIY water filter:<br>
    1. Cut a plastic bottle.<br>
    2. Layer cloth, charcoal, sand.<br>
    3. Pour water slowly.<br>
    4. Boil after filtering.<br><br>
    <img src="filter.jpg" width="100%" alt="DIY Water Filter Diagram" />
  `;
  toggleInfo("hygieneInfo", info);
}




function showMap() {
  const map = document.getElementById("mapContainer");
  map.style.display = map.style.display === "none" ? "block" : "none";
}

function sendHelpSMS() {
  const status = document.getElementById("smsStatus");
  status.style.display = "block";
  status.innerText = "📡 Simulated SMS sent to 999: 'Emergency in Feni. Need rescue at XYZ location.'";
}

function toggleInfo(id, html) {
  const element = document.getElementById(id);

  if (element.style.display === "block") {
    element.style.display = "none";
    element.innerHTML = "";
  } else {
    element.style.display = "block";
    element.innerHTML = html;
  }
}
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log('ServiceWorker registered: ', registration);
    }).catch(registrationError => {
      console.log('ServiceWorker registration failed: ', registrationError);
    });
  });
}

