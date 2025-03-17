<script setup>
import { ref } from 'vue'
</script>

<template>
    <header class="navbar bg-neutral shadow-sm">
        <div class="navbar-start">
            <a class="btn-ghost btn text-xl btn-circle avatar"><img src="/icon.png" /></a>
        </div>
        <div class="navbar-center">
            <a
                href="https://github.com/spelis/lunabot"
                class="btn btn-ghost text-xl rounded-full mx-5"
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
</template>
