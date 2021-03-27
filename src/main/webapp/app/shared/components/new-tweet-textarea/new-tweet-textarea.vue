<template>
  <!-- new tweet textarea start -->
  <div class="new-tweet-textarea p-3 pb-0">
    <div class="flex">

      <div class="w-16">
        <div class="inner">
          <img class="rounded-full block w-full"
               src="https://pbs.twimg.com/profile_images/1192060406627545089/SWlYzx4n_bigger.jpg"
               alt="profile image">
        </div>
      </div>

      <div class="w-full">
        <div class="textarea px-2 mt-4">
                  <textarea class="w-full h-10 focus:outline-none resize-none" placeholder="What's happening?"
                            rows="2"></textarea>
        </div>
        <div class="textarea-footer">
          <div class="flex">
            <div class="w-full">
              <div class="inner">
                <ul class="clearfix twitter-color mt-1">
                  <li class="float-left">
                    <span
                      class="w-10 h-10 twitter-light-blue-on-hover p-2 rounded-full cursor-pointer">
                        <svg viewBox="0 0 24 24"
                             class="r-13gxpu9 r-4qtqp9 r-yyyyoo r-1q142lx r-50lct3 r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"><g><path
                          d="M19.75 2H4.25C3.01 2 2 3.01 2 4.25v15.5C2 20.99 3.01 22 4.25 22h15.5c1.24 0 2.25-1.01 2.25-2.25V4.25C22 3.01 20.99 2 19.75 2zM4.25 3.5h15.5c.413 0 .75.337.75.75v9.676l-3.858-3.858c-.14-.14-.33-.22-.53-.22h-.003c-.2 0-.393.08-.532.224l-4.317 4.384-1.813-1.806c-.14-.14-.33-.22-.53-.22-.193-.03-.395.08-.535.227L3.5 17.642V4.25c0-.413.337-.75.75-.75zm-.744 16.28l5.418-5.534 6.282 6.254H4.25c-.402 0-.727-.322-.744-.72zm16.244.72h-2.42l-5.007-4.987 3.792-3.85 4.385 4.384v3.703c0 .413-.337.75-.75.75z"></path><circle
                          cx="8.868" cy="8.309" r="1.542"></circle></g></svg>
                    </span>
                  </li>
                  <li class="float-left">
                     <span
                       class="w-10 h-10 twitter-light-blue-on-hover p-2 rounded-full cursor-pointer">
                         <svg viewBox="0 0 24 24"
                              class="r-13gxpu9 r-4qtqp9 r-yyyyoo r-1q142lx r-50lct3 r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"><g><path
                           d="M19 10.5V8.8h-4.4v6.4h1.7v-2h2v-1.7h-2v-1H19zm-7.3-1.7h1.7v6.4h-1.7V8.8zm-3.6 1.6c.4 0 .9.2 1.2.5l1.2-1C9.9 9.2 9 8.8 8.1 8.8c-1.8 0-3.2 1.4-3.2 3.2s1.4 3.2 3.2 3.2c1 0 1.8-.4 2.4-1.1v-2.5H7.7v1.2h1.2v.6c-.2.1-.5.2-.8.2-.9 0-1.6-.7-1.6-1.6 0-.8.7-1.6 1.6-1.6z"></path><path
                           d="M20.5 2.02h-17c-1.24 0-2.25 1.007-2.25 2.247v15.507c0 1.238 1.01 2.246 2.25 2.246h17c1.24 0 2.25-1.008 2.25-2.246V4.267c0-1.24-1.01-2.247-2.25-2.247zm.75 17.754c0 .41-.336.746-.75.746h-17c-.414 0-.75-.336-.75-.746V4.267c0-.412.336-.747.75-.747h17c.414 0 .75.335.75.747v15.507z"></path></g></svg>
                     </span>
                  </li>
                  <li class="float-left">
                    <span
                      class="w-10 h-10 twitter-light-blue-on-hover p-2 rounded-full cursor-pointer">
                        <svg viewBox="0 0 24 24"
                             class="r-13gxpu9 r-4qtqp9 r-yyyyoo r-1q142lx r-50lct3 r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"><g><path
                          d="M20.222 9.16h-1.334c.015-.09.028-.182.028-.277V6.57c0-.98-.797-1.777-1.778-1.777H3.5V3.358c0-.414-.336-.75-.75-.75s-.75.336-.75.75V20.83c0 .415.336.75.75.75s.75-.335.75-.75v-1.434h10.556c.98 0 1.778-.797 1.778-1.777v-2.313c0-.095-.014-.187-.028-.278h4.417c.98 0 1.778-.798 1.778-1.778v-2.31c0-.983-.797-1.78-1.778-1.78zM17.14 6.293c.152 0 .277.124.277.277v2.31c0 .154-.125.28-.278.28H3.5V6.29h13.64zm-2.807 9.014v2.312c0 .153-.125.277-.278.277H3.5v-2.868h10.556c.153 0 .277.126.277.28zM20.5 13.25c0 .153-.125.277-.278.277H3.5V10.66h16.722c.153 0 .278.124.278.277v2.313z"></path></g></svg>
                    </span>
                  </li>
                  <li class="float-left">
                     <span
                       class="w-10 h-10 twitter-light-blue-on-hover p-2 rounded-full cursor-pointer">
                             <svg viewBox="0 0 24 24"
                                  class="r-13gxpu9 r-4qtqp9 r-yyyyoo r-1q142lx r-50lct3 r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"><g><path
                               d="M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"></path><path
                               d="M12 17.115c-1.892 0-3.633-.95-4.656-2.544-.224-.348-.123-.81.226-1.035.348-.226.812-.124 1.036.226.747 1.162 2.016 1.855 3.395 1.855s2.648-.693 3.396-1.854c.224-.35.688-.45 1.036-.225.35.224.45.688.226 1.036-1.025 1.594-2.766 2.545-4.658 2.545z"></path><circle
                               cx="14.738" cy="9.458" r="1.478"></circle><circle
                               cx="9.262" cy="9.458" r="1.478"></circle></g></svg>
                     </span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="w-full">
              <div class="inner">
                <ul class="flex items-center justify-end">
                  <li class="inline-block">
                    <span class="w-5 h-5 border-2 border-solid border-gray-500 rounded-full"></span>
                  </li>
                  <li class="inline-block">
                            <span
                              class="border block border-solid border-gray-500 text-transparent border-t-0 border-l-0 border-b-0 w-1 h-8 mx-3 mb-1">.</span>
                  </li>

                  <li class="inline-block mr-1">
                                                        <span
                                                          class="w-8 border p-1 twitter-border-color-light twitter-color-light rounded-full">
                                                            <svg viewBox="0 0 24 24"
                                                                 class="r-13gxpu9 r-4qtqp9 r-yyyyoo r-1q142lx r-50lct3 r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"><g><path
                                                              d="M19.75 11H13V4.25c0-.553-.447-1-1-1s-1 .447-1 1V11H4.25c-.553 0-1 .447-1 1s.447 1 1 1H11v6.75c0 .553.447 1 1 1s1-.447 1-1V13h6.75c.553 0 1-.447 1-1s-.447-1-1-1z"></path></g></svg>
                                                        </span>
                  </li>

                  <li class="text-right m-1 mb-2">
                                                        <span class="w-20 inline-block">
                                                            <button
                                                              class="p-3 py-2 twitter-bg text-white w-full rounded-full font-bold tracking-wide ">Tweet</button>
                                                        </span>
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- new tweet textarea end -->
</template>

<script lang="ts" src="./new-tweet-textarea.component.ts"></script>

<style scoped>

</style>
