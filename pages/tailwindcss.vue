<script setup>

</script>

<template>
    <NuxtLink to="/">Return to Homepage</NuxtLink>
    <h3 class="text-2xl font-bold text-center text-green-500">什麼是兔兔教？?</h3>
    <p>
        一種兔兔的信仰教派，本派信奉真神兔兔，且每時每刻都將兔兔放在心中，期待兔兔降臨為我們出生時所帶的原紅蘿蔔通通吃乾淨，以讓我們可以進兔兔天國。
    </p>
    <ul class="list-disc list-inside">
        <li>每天都吃紅蘿蔔</li>
        <li>不吃紅蘿蔔就吃菜</li>
    </ul>
    <button class="text-blue-500 line-through">
        <b><i>信兔兔，無 Bug</i></b>
    </button>
    <div
        class="bg-blue-500 text-white w-40 text-center h-40 border-8 border-blue-300 rounded-3xl bg-gradient-to-tl from-yellow-300 via-red-500 to-indigo-500 flex justify-center items-center">
        兔兔方塊
    </div>
    <div id="衛生所" class="bg-red-200 m-20 px-5 py-8 w-90 flex">
        <span class="兔 沒口罩">yy</span>
        <!-- code 也要社交安全距離呦～ -->
        <span class="ml-6 space-x-12 space-y-16">
            <span class="兔 有口罩">xx</span>
            <span class="兔 有口罩">xx</span>
            <span class="兔 有口罩">xx</span>
            <span class="兔 有口罩">xx</span>
        </span>
    </div>
    <div id="衛生所" class="bg-red-200 m-20 px-5 py-8 flex gap-6 ">
        <span class="兔 沒口罩 flex-shrink-0"></span>
        <span class="兔 有口罩 flex-shrink-0"></span>
        <span class="兔 有口罩 flex-shrink"></span>
        <span class="兔 有口罩 flex-shrink-0"></span>
        <span class="兔 有口罩 flex-shrink-0"></span>
    </div>
    <!-- flex-wrap -->
    <div id="衛生所" class="bg-red-200 m-20 px-5 py-8 flex gap-6 flex-wrap">
        <span class="兔 沒口罩"></span>
        <span class="兔 有口罩"></span>
        <span class="兔 有口罩"></span>
        <span class="兔 有口罩"></span>
        <span class="兔 有口罩"></span>
    </div>
    <!-- flex-col -->
    <div id="衛生所" class="bg-red-200 m-20 px-5 py-8 flex gap-6 flex-wrap flex-col">
        <span class="兔 沒口罩"></span>
        <span class="兔 有口罩"></span>
        <span class="兔 有口罩"></span>
        <span class="兔 有口罩"></span>
        <span class="兔 有口罩"></span>
    </div>
    <!-- 網格欄數 (grid-template-columns) -->
    <!-- 網格跨欄 (grid-column start/end) -->
    <div id="衛生所" class="bg-red-200 m-20 px-5 py-8 grid gap-6 grid-cols-6">
        <span class="兔 有口罩"></span>
        <span class="兔 有口罩"></span>
        <span class="兔 有口罩"></span>
        <span class="兔 有口罩 "></span>
        <span class="兔 沒口罩 col-start-3 col-span-2"></span>
    </div>
    <!-- 內容對齊 (justify-content) -->
    <div id="魚缸" class="w-96 h-64 flex justify-between items-center">
        <div id="金魚"></div>
        <div id="金魚"></div>
        <div id="金魚"></div>
    </div>

    <doc class="flex flex-col items-center">
        <logo class="border rounded-xl w-32 h-32 p-5 my-3 shadow-2xl bg-yellow-200">
            <img class="w-full" src="https://i.imgur.com/FTAvuYj.png">
        </logo>
        <main class="flex justify-center items-center">
            <content class="text-lg">
                <span class="text-3xl font-bold block mb-3">沿革</span>
                兔大王公司成立於 2021 年。主要業務範圍是製作高科技紅蘿蔔，
                同時也是知名團體兔兔教的開運紅蘿蔔御用製作廠商。<br>
                創辦人兔大王白手起家，早在十年多前，一開始賣的都是普通的發光紅蘿蔔，而非現在的高科技紅蘿蔔。
                兔大王堅持每根發光紅蘿蔔都是純手工打造，且還要保持相同的質感與水準。<br>
                現今雖然高科技紅蘿蔔的生產極度仰賴機器，但精神不變。每根產出的高科技紅蘿蔔皆為手工脫模、檢查及包裝。
            </content>
            <sign class="bg-gray-400 opacity-30">
                兔大王公司
            </sign>
        </main>
    </doc>

    <div class="flex justify-evenly p-10 focus-within:bg-green-100 group transition-all duration-1000 delay-1000">
        <box class="bg-red-500 ring-red-300 hover:bg-blue-400 focus:ring-4 group-hover:text-gray-600 transition-all animate-bounce"
            tabindex="0">
            1
        </box>

        <box class="bg-blue-500  hover:bg-red-400 ring-blue-300 focus:ring-4 group-hover:text-gray-600 transition-all animate-spin"
            tabindex="1">
            2
        </box>
    </div>

    <div class="flex justify-evenly p-5 flex-wrap gap-5">
        <box class="sm:bg-yellow-500 sm:w-full">
            sm
        </box>
        <box class="md:bg-yellow-500 md:w-full">
            md
        </box>
        <box class="lg:bg-yellow-500 lg:w-full">
            lg
        </box>
    </div>

    <product class="flex flex-col gap-2 sm:flex-row sm:w-full sm:gap-3">
        <img class="rounded-lg sm:h-36" src="https://i.imgur.com/oLn9yvJ.jpg">
        <span class="text-gray-700 flex flex-col gap-1">
            <span class="text-xl font-bold sm:mb-1">和兔兔一起用 Tailwind CSS 快速上手漂亮的原件開發</span>
            <span class="text-sm">
                相信有在接觸前端領域的人或多或少都會聽過 Tailwind CSS，或是有一些人已經對它很熟悉、甚至是有用過了。
                Tailwind 是一個 ...
            </span>
            <span class="text-red-600 font-black text-xl" style="text-align: right">$ 790</span>
        </span>
    </product>
</template>
