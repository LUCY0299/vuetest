<template>
    <div>
      <h1>第一筆資料如下：</h1>
      <ul>
        <li v-for="item in items" :key="item.seq">
        行政區: {{ item.行政區 }}，臨時停車處所: {{ item.臨時停車處所 }}，
        可提供小型車停車位: {{ item.可提供小型車停車位 }}，地址: {{ item.地址 }}
        </li>
      </ul>
    </div>
    <div>
      <h1>第二筆資料如下：</h1>
      <ul>
        <li v-for="hotel in hotels" :key="hotel.seq">
          類別: {{ hotel.類別 }}，星等: {{ hotel.星等 }}，旅宿名稱: {{ hotel.旅宿名稱 }}，
          縣市: {{ hotel.縣市 }}，地址: {{ hotel.地址 }}，電話: {{ hotel.電話 }}
        </li>
      </ul>
    </div>

  </template>
  
  <script>
  export default {
    data() {
      return {
        items: [],
        hotels: [],
      };
    },
    mounted() {
      this.fetchData();
      this.fetchHotelsData();
    },
    methods: {
      fetchData() {
        fetch('https://api.kcg.gov.tw/api/service/Get/897e552a-2887-4f6f-a6ee-709f7fbe0ee3')
          .then(response => response.json())
          .then(data => {
          // 因為API的數據結構中，我們需要的數據位於"data"屬性中
          this.items = data.data; // 根據API返回的結構調整
        })
          .catch(error => console.error("There was an error fetching the data:", error));
      },

      fetchHotelsData() {
        fetch('https://api.kcg.gov.tw/api/service/Get/8ed53368-e292-4e2a-80a7-434cf497220c')
          .then(response => response.json())
          .then(data => {
          this.hotels = data.data;
        })
        .catch(error => console.error("Fetching hotels data error:", error));
    }
    }
  }
  </script>
  