<script setup lang="ts"></script>

<template>
    <header class="navbar bg-neutral shadow-sm">
        <div class="navbar-start">
            <a href="https://github.com/spelis/lunabot" class="btn btn-ghost text-xl rounded-full"
                >GitHub</a
            >
            <div class="tooltip tooltip-bottom tooltip-info" data-tip="Releasing on the 19th">
                <progress
                    class="progress w-28"
                    :value="
                        Math.floor(
                            ((Date.now() - new Date('2025-03-16').getTime()) /
                                (new Date('2025-03-19').getTime() -
                                    new Date('2025-03-16').getTime())) *
                                100,
                        )
                    "
                    max="100"
                ></progress>
            </div>
        </div>
        <div class="navbar-center">
            <a class="btn-ghost btn text-xl rounded-full"
                ><img src="/icon.png" class="w-8 h-8" /> LunaBot
                <img src="/icon.png" class="w-8 h-8"
            /></a>
        </div>
        <div class="navbar-end">
            <div class="dropdown dropdown-end">
                <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar bg-base-300">
                    <div class="w-10 rounded-full">
                        <img src="" alt="-" />
                    </div>
                </div>
                <ul
                    class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow-xl border border-base-300"
                >
                    <li><a class="justify-between">Dashboard / Log in</a></li>
                    <li>
                        <a>Log out</a>
                    </li>
                </ul>
            </div>
        </div>
    </header>
    <main class="flex-1">
        <div class="flex flex-row flex-auto bg-base-100">
            <div class="mx-5 my-5 flex-[0.25] place-items-center">
                <div class="bg-base-200 shadow-xl rounded-box">
                    <div class="stats stats-vertical shadow w-full">
                        <div class="stat place-items-center">
                            <div class="stat-value text-primary">Stats</div>
                        </div>
                        <div class="stat place-items-center">
                            <div class="stat-value">>5</div>
                            <div class="stat-title">Servers</div>
                        </div>
                        <div class="stat place-items-center">
                            <div class="stat-value">>20</div>
                            <div class="stat-title">Users</div>
                        </div>
                        <div class="stat place-items-center">
                            <div class="stat-value">~40</div>
                            <div class="stat-title">Commands</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="divider divider-horizontal" />
            <div class="mx-auto my-5 flex-[0.5] place-items-center flex justify-center">
                <img src="/icon.png" alt="Luna Logo" class="w-48 h-48" />
                <span class="text-5xl font-bold text-center">LunaBot</span>
            </div>
            <div class="divider divider-horizontal" />
            <div class="mx-5 my-5 flex-[0.25] place-items-center">empty section hehe</div>
        </div>
    </main>
</template>
