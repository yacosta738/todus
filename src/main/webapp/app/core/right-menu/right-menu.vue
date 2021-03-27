<template>
  <!-- right column start -->
  <div class="sticky h-screen overflow-y-auto top-0 w-3/12 flex-none px-4 py-0">

    <!-- inner start -->
    <div class="inner right-column" id="rightSide">

      <!-- block seach block start -->
      <div class="block search-block my-2">

        <!-- form start -->
        <form class="w-full max-w-sm">
          <div class="flex items-center py-2 bg-gray-300 rounded-full search-input-wrappper">
                                    <span class="w-8 px-1 mx-2">
                                        <svg viewBox="0 0 24 24"
                                             class="r-1re7ezh r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-18qmn74 r-1hfyk0a r-bnwqim r-1plcrui r-lrvibr"><g><path
                                          d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
                                    </span>
            <input
              class="appearance-none search-input bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight font-normal focus:outline-none"
              type="text" placeholder="Search Twitter">
          </div>
        </form>
        <!-- form end -->

      </div>
      <!-- block seach block end -->

      <!-- block trend block start -->
      <div class="block trend-block my-4 rounded-lg">

        <!-- trend block header start -->
        <div class="trend-block-header clearfix px-3 py-3">
          <span class="float-left text-xl font-extrabold text-gray-900">Worldwide trends</span>
          <span
            class="w-8 float-right twitter-color rounded-full cursor-pointer p-1 transition-3 twitter-light-blue-on-hover">
                                    <svg viewBox="0 0 24 24"
                                         class="r-13gxpu9 r-4qtqp9 r-yyyyoo r-1q142lx r-50lct3 r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"><g><path
                                      d="M12 8.21c-2.09 0-3.79 1.7-3.79 3.79s1.7 3.79 3.79 3.79 3.79-1.7 3.79-3.79-1.7-3.79-3.79-3.79zm0 6.08c-1.262 0-2.29-1.026-2.29-2.29S10.74 9.71 12 9.71s2.29 1.026 2.29 2.29-1.028 2.29-2.29 2.29z"></path><path
                                      d="M12.36 22.375h-.722c-1.183 0-2.154-.888-2.262-2.064l-.014-.147c-.025-.287-.207-.533-.472-.644-.286-.12-.582-.065-.798.115l-.116.097c-.868.725-2.253.663-3.06-.14l-.51-.51c-.836-.84-.896-2.154-.14-3.06l.098-.118c.186-.222.23-.523.122-.787-.11-.272-.358-.454-.646-.48l-.15-.014c-1.18-.107-2.067-1.08-2.067-2.262v-.722c0-1.183.888-2.154 2.064-2.262l.156-.014c.285-.025.53-.207.642-.473.11-.27.065-.573-.12-.795l-.094-.116c-.757-.908-.698-2.223.137-3.06l.512-.512c.804-.804 2.188-.865 3.06-.14l.116.098c.218.184.528.23.79.122.27-.112.452-.358.477-.643l.014-.153c.107-1.18 1.08-2.066 2.262-2.066h.722c1.183 0 2.154.888 2.262 2.064l.014.156c.025.285.206.53.472.64.277.117.58.062.794-.117l.12-.102c.867-.723 2.254-.662 3.06.14l.51.512c.836.838.896 2.153.14 3.06l-.1.118c-.188.22-.234.522-.123.788.112.27.36.45.646.478l.152.014c1.18.107 2.067 1.08 2.067 2.262v.723c0 1.183-.888 2.154-2.064 2.262l-.155.014c-.284.024-.53.205-.64.47-.113.272-.067.574.117.795l.1.12c.756.905.696 2.22-.14 3.06l-.51.51c-.807.804-2.19.864-3.06.14l-.115-.096c-.217-.183-.53-.23-.79-.122-.273.114-.455.36-.48.646l-.014.15c-.107 1.173-1.08 2.06-2.262 2.06zm-3.773-4.42c.3 0 .593.06.87.175.79.328 1.324 1.054 1.4 1.896l.014.147c.037.4.367.7.77.7h.722c.4 0 .73-.3.768-.7l.014-.148c.076-.842.61-1.567 1.392-1.892.793-.33 1.696-.182 2.333.35l.113.094c.178.148.366.18.493.18.206 0 .4-.08.546-.227l.51-.51c.284-.284.305-.73.048-1.038l-.1-.12c-.542-.65-.677-1.54-.352-2.323.326-.79 1.052-1.32 1.894-1.397l.155-.014c.397-.037.7-.367.7-.77v-.722c0-.4-.303-.73-.702-.768l-.152-.014c-.846-.078-1.57-.61-1.895-1.393-.326-.788-.19-1.678.353-2.327l.1-.118c.257-.31.236-.756-.048-1.04l-.51-.51c-.146-.147-.34-.227-.546-.227-.127 0-.315.032-.492.18l-.12.1c-.634.528-1.55.67-2.322.354-.788-.327-1.32-1.052-1.397-1.896l-.014-.155c-.035-.397-.365-.7-.767-.7h-.723c-.4 0-.73.303-.768.702l-.014.152c-.076.843-.608 1.568-1.39 1.893-.787.326-1.693.183-2.33-.35l-.118-.096c-.18-.15-.368-.18-.495-.18-.206 0-.4.08-.546.226l-.512.51c-.282.284-.303.73-.046 1.038l.1.118c.54.653.677 1.544.352 2.325-.327.788-1.052 1.32-1.895 1.397l-.156.014c-.397.037-.7.367-.7.77v.722c0 .4.303.73.702.768l.15.014c.848.078 1.573.612 1.897 1.396.325.786.19 1.675-.353 2.325l-.096.115c-.26.31-.238.756.046 1.04l.51.51c.146.147.34.227.546.227.127 0 .315-.03.492-.18l.116-.096c.406-.336.923-.524 1.453-.524z"></path></g></svg>
                                </span>
        </div>
        <!-- trend block header end -->

        <hr class="h-px bg-gray-300">

        <!-- trend list wrapper start -->
        <div class="trend-list-wrapper">
          <!-- trend list start -->
          <ul class="trend-list">


            <!-- trend list item -->
            <li class="trend-list-item">
              <!-- trend list link start -->
              <a href="" class="trend-list-link px-3 py-3 block">
                <span class="block text-xs text-gray-600"> 1 - Trending worldwide </span>
                <span class="block text-base font-semibold mt-1 text-black"> #AskSRK </span>
                <span class="block text-sm font-normal text-gray-600"> 47.4k Tweets </span>
                <span class="block text-xs font-normal text-gray-600 clearfix mt-1">
                                                <img class="inline-block w-4 rounded-full float-left mr-2"
                                                     src="https://pbs.twimg.com/profile_images/1170222681553162240/9ZaLRf3r_normal.jpg"
                                                     alt="trending image"/> The Quint is Tweetng about this
                                            </span>
              </a>
              <!-- trend list link end -->
            </li>
            <!-- trend list item end -->


            <!-- trend list item -->
            <li class="trend-list-item">
              <!-- trend list link start -->
              <a href="" class="trend-list-link px-3 py-3 block">
                <span class="block text-xs text-gray-600"> 2 - Trending worldwide </span>
                <span class="block text-base font-semibold mt-1 text-black"> #SavasaHayir </span>
                <span class="block text-sm font-normal text-gray-600"> 30.4k Tweets </span>
              </a>
              <!-- trend list link end -->
            </li>
            <!-- trend list item end -->


            <!-- trend list item -->
            <li class="trend-list-item">
              <!-- trend list link start -->
              <a href="" class="trend-list-link px-3 py-3 block">
                <span class="block text-xs text-gray-600"> 3 - Trending worldwide </span>
                <span class="block text-base font-semibold mt-1 text-black"> #HappyEid </span>
                <span class="block text-sm font-normal text-gray-600"> 155.4k Tweets </span>
                <span class="block text-xs font-normal text-gray-600 clearfix mt-1">
                                                <img class="inline-block w-4 rounded-full float-left mr-2"
                                                     src="https://pbs.twimg.com/profile_images/1170222681553162240/9ZaLRf3r_normal.jpg"
                                                     alt="trending image"/> The Quint is Tweetng about this
                                            </span>
              </a>
              <!-- trend list link end -->
            </li>
            <!-- trend list item end -->


            <!-- trend list item -->
            <li class="trend-list-item">
              <!-- trend list link start -->
              <a href="" class="trend-list-link px-3 py-3 block">
                <span class="block text-xs text-gray-600"> 4 - Trending worldwide </span>
                <span class="block text-base font-semibold mt-1 text-black"> #turkmilletiodusununyaninda </span>
                <span class="block text-sm font-normal text-gray-600"> 15.4k Tweets </span>
              </a>
              <!-- trend list link end -->
            </li>
            <!-- trend list item end -->


            <!-- trend list item -->
            <li class="trend-list-item">
              <!-- trend list link start -->
              <a href="" class="trend-list-link px-3 py-3 block">
                <span class="block text-xs text-gray-600"> 5 - Trending worldwide </span>
                <span class="block text-base font-semibold mt-1 text-black"> #AskSRK </span>
                <span class="block text-sm font-normal text-gray-600"> 347.4k Tweets </span>
              </a>
              <!-- trend list link end -->
            </li>
            <!-- trend list item end -->

            <!-- trend list item -->
            <li class="trend-list-item">
              <!-- trend list link start -->
              <a href="" class="trend-list-link block  p-3 tracking-wider">
                Show more
              </a>
              <!-- trend list link end -->
            </li>
            <!-- trend list item end -->


          </ul>
          <!-- trend list end -->
        </div>
        <!-- trend list wrapper end -->
      </div>
      <!-- block trend block end -->


      <!-- block who to follow block start -->
      <div class="block who-to-follow-block twitter-extra-light-gray-bg my-5 rounded-bl-lg">

        <!-- who to follow block header start -->
        <div class="who-to-follow-block-header clearfix px-3 py-3">
          <span class="float-left text-xl font-extrabold text-gray-900">Who to follow</span>
        </div>
        <!-- who to follow block header end -->

        <hr class="h-px bg-gray-300">

        <!-- who to follow list wrapper start -->
        <div class="who-to-flow-list-wrapper">
          <!-- who to follow list start -->
          <ul class="who-to-follow-list">


            <!-- who to follow list item start -->
            <li class="who-to-follow-list-item">
              <!-- who to follow list link start -->
              <a href="" class="who-to-follow-link block flex">
                                            <span class="w-auto p-2">
                                                <img class="w-24 block rounded-full shadow-2xl"
                                                     src="https://pbs.twimg.com/profile_images/862681541620645892/6Bn_15Jz_normal.jpg"
                                                     alt="Profile Image">
                                            </span>
                <span class="leading-none w-full p-2 flex items-center">
                                               <span>
                                                    <b class="hover:underline text-gray-900">NoorUllah Mengal</b>
                                                    <span class="mt-1 text-sm text-gray-600">@SecInfoPAT</span>
                                            </span>
                                            </span>
                <span class="w-auto text-right flex items-center p-2 pr-4 justify-center">
                                                <button
                                                  class="hover:bg-blue-500 transition-3 hover:text-white twitter-border rounded-full twitter-color px-4 py-px font-bold ">Follow</button>
                                            </span>
              </a>
              <!-- who to follow list link end -->
            </li>
            <!-- who to follow list item end -->


            <!-- who to follow list item start -->
            <li class="who-to-follow-list-item">
              <!-- who to follow list link start -->
              <a href="" class="who-to-follow-link block flex">
                                            <span class="w-auto p-2">
                                                <img class="w-24 block rounded-full shadow-2xl"
                                                     src="https://pbs.twimg.com/profile_images/1156996248186081281/QSXy_pQy_normal.jpg"
                                                     alt="Profile Image">
                                            </span>
                <span class="leading-none w-full p-2 flex items-center">
                                               <span>
                                                    <b class="hover:underline text-gray-900">Armeena Khan</b>
                                                    <span class="mt-1 text-sm text-gray-600">@ArmeenaRK</span>
                                            </span>
                                            </span>
                <span class="w-auto text-right flex items-center p-2 pr-4 justify-center">
                                                <button
                                                  class="hover:bg-blue-500 transition-3 hover:text-white twitter-border rounded-full twitter-color px-4 py-px font-bold ">Follow</button>
                                            </span>
              </a>
              <!-- who to follow list link end -->
            </li>
            <!-- who to follow list item end -->


            <!-- who to follow list item start -->
            <li class="who-to-follow-list-item">
              <!-- who to follow list link start -->
              <a href="" class="who-to-follow-link block flex">
                                            <span class="w-auto p-2">
                                                <img class="w-24 block rounded-full shadow-2xl"
                                                     src="https://pbs.twimg.com/profile_images/1162860983234244610/SkXnT9lp_normal.jpg"
                                                     alt="Profile Image">
                                            </span>
                <span class="leading-none w-full p-2 flex items-center">
                                               <span>
                                                    <b class="hover:underline text-gray-900">Raheeq Abbasi</b>
                                                    <span class="mt-1 text-sm text-gray-600">@RaheeqAbbasi</span>
                                            </span>
                                            </span>
                <span class="w-auto text-right flex items-center p-2 pr-4 justify-center">
                                                <button
                                                  class="hover:bg-blue-500 transition-3 hover:text-white twitter-border rounded-full twitter-color px-4 py-px font-bold ">Follow</button>
                                            </span>
              </a>
              <!-- who to follow list link end -->
            </li>
            <!-- who to follow list item end -->

            <!-- who to follow list item start -->
            <li class="who-to-follow-list-item">
              <!-- who to follow list link start -->
              <a href="" class="who-to-follow-link block flex p-3 tracking-wider">
                Show more
              </a>
              <!-- who to follow list link end -->
            </li>
            <!-- who to follow list item end -->


          </ul>
          <!-- who to follow list end -->
        </div>
        <!-- who to follow list wrapper end -->

      </div>
      <!-- block who to follow block end -->

    <jhi-footer></jhi-footer>



    </div>
    <!-- inner end -->

  </div>
  <!-- right column end -->
</template>

<script lang="ts" src="./right-menu.component.ts"></script>

<style scoped>

</style>
