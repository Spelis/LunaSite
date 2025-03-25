<script setup lang="ts">
import Navbar from '../../components/navbar.vue'
import Footer from '../../components/footer.vue'
</script>

<template>
    <Navbar />
    <main class="flex-1 pb-15">
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
                <img src="/icon.png" alt="Luna Logo" class="w-32 h-32 animate-bounce" />
                <span class="text-5xl font-bold text-center">LunaBot</span>
            </div>
            <div class="divider divider-horizontal" />
            <div class="mx-5 my-5 flex-[0.25] place-items-center">
                <span class="text-3xl font-bold">Information</span><br />Luna is a Discord bot meant
                to bring fun, utility and more to your server.
                <br />
                What's better? Luna is Completely <span class="text-primary">Free</span> and
                <span class="text-primary">Open Source</span>! <br />Here at Luna, we believe in the
                power of the community. We want to make Luna the best it can be for you and your
                server. If you want to contribute to Luna, you can do so by forking this repository
                and making a PR. <br />Ready to get started? Click here to invite LunaBot to your
                server!
                <div class="border border-info bg-base-300 rounded-xl p-2 text-xs">
                    <span class="text-info"
                        ><span class="font-bold">Note</span>: Luna is currently in development and
                        there may be bugs or missing features. Feel free to report any bugs or
                        suggestions in the <a>issues github tab. </a></span
                    >
                </div>
            </div>
        </div>
        <div class="divider" />
        <div class="flex flex-col items-center gap-8 p-8">
            <h2 class="text-4xl font-bold text-center">Features</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="card bg-base-200 shadow-xl">
                    <div class="card-body">
                        <h3 class="card-title">Moderation</h3>
                        <p>Powerful moderation tools to keep your server safe and organized</p>
                    </div>
                </div>
                <div class="card bg-base-200 shadow-xl">
                    <div class="card-body">
                        <h3 class="card-title">Fun Commands</h3>
                        <p>Engage your community with entertaining commands and games</p>
                    </div>
                </div>
                <div class="card bg-base-200 shadow-xl">
                    <div class="card-body">
                        <h3 class="card-title">Utility</h3>
                        <p>Helpful utilities to enhance your Discord server experience</p>
                    </div>
                </div>
                <div class="card bg-base-200 shadow-xl">
                    <div class="card-body">
                        <h3 class="card-title">Utility</h3>
                        <p>Helpful utilities to enhance your Discord server experience</p>
                    </div>
                </div>
                <div class="card bg-base-200 shadow-xl">
                    <div class="card-body">
                        <h3 class="card-title">Utility</h3>
                        <p>Helpful utilities to enhance your Discord server experience</p>
                    </div>
                </div>
                <div class="card bg-base-200 shadow-xl">
                    <div class="card-body">
                        <h3 class="card-title">Utility</h3>
                        <p>Helpful utilities to enhance your Discord server experience</p>
                    </div>
                </div>
                <div class="card bg-base-200 shadow-xl">
                    <div class="card-body">
                        <h3 class="card-title">Utility</h3>
                        <p>Helpful utilities to enhance your Discord server experience</p>
                    </div>
                </div>
                <div class="card bg-base-200 shadow-xl">
                    <div class="card-body">
                        <h3 class="card-title">Utility</h3>
                        <p>Helpful utilities to enhance your Discord server experience</p>
                    </div>
                </div>
                <div class="card bg-base-200 shadow-xl">
                    <div class="card-body">
                        <h3 class="card-title">Calculations And Graphs</h3>
                        <p>Learn, Plot and Visualize Formulas or Datasets</p>
                        <div class="stack">
                            <div class="card shadow shadow-xl bg-base-100 place-items-center">
                                <code>/latex \frac{3}{4}</code>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                    fill="#cdd6f4"
                                    height="30px"
                                    width="30px"
                                    version="1.1"
                                    id="Layer_1"
                                    viewBox="0 0 330 330"
                                    xml:space="preserve"
                                >
                                    <path
                                        id="XMLID_225_"
                                        d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393  c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393  s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                                    />
                                </svg>
                                <img src="/latex.png" alt="" />
                            </div>
                            <div class="card shadow bg-base-100" />
                            <div class="card shadow bg-base-100" />
                            <div class="card shadow bg-base-100" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <Footer />
</template>
