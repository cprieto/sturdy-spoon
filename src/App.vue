<script setup lang="ts">
</script>

<template>
  <section class="section">
    <h1 class="title">Collaborative P2P music tracker</h1>

    <div class="level block">
        <div class="field is-grouped">
            <p class="control is-expanded">
                <input type="text" class="input" placeholder="Session id">
            </p>
            <p class="control">
                <a href="#" class="button is-info">
                    Join
                </a>
            </p>
        </div>

        <div class="field">
            <p class="control">
                <input type="text" class="input" placeholder="username">
            </p>
        </div>
    </div>

    <div class="block box">

        <!-- Play buttons -->
        <div class="level">
            <div class="buttons level-item level-left">
                <button class="button" title="Start playing">
                    <span class="icon is-small">
                        <i class="fa-solid fa-play"></i>
                    </span>
                </button>

                <button class="button" title="Stop playing">
                    <span class="icon is-small">
                        <i class="fa-solid fa-stop"></i>
                    </span>
                </button>

            </div>
        </div>

        <!-- Start instrument track -->
        <div class="box level has-background-light">
            <div class="level-item level-left">
                <p>Instrument</p>
            </div>
            <div class="buttons are-small level-item m-0">
                <a href="#" class="button track-item"></a>
                <a href="#" class="button track-item"></a>
                <a href="#" class="button track-item"></a>
                <a href="#" class="button track-item"></a>
                <a href="#" class="button track-item"></a>
                <a href="#" class="button track-item"></a>
                <a href="#" class="button track-item"></a>
                <a href="#" class="button track-item"></a>
                <a href="#" class="button track-item"></a>
                <a href="#" class="button track-item"></a>
                <a href="#" class="button track-item"></a>
                <a href="#" class="button track-item"></a>
                <a href="#" class="button track-item"></a>
                <a href="#" class="button track-item"></a>
                <a href="#" class="button track-item"></a>
                <a href="#" class="button track-item"></a>
            </div>
            <div class="level-item level-right buttons">
                <button class="button" title="Single">
                    <span class="icon is-small">
                        <i class="fa-solid fa-ear-listen"></i>
                    </span>
                </button>
                
                <button class="button" title="Mute">
                    <span class="icon is-small">
                        <i class="fa-solid fa-volume-xmark"></i>
                    </span>
                </button>
                <button class="button" title="Remove instrument">
                    <span class="icon is-small">
                        <i class="fa-solid fa-trash-can"></i>
                    </span>
                </button>
            </div>
        </div>

        <div class="box level has-background-light">
            <div class="level-item level-left">
                <p>Instrument</p>
            </div>
            <div class="buttons are-small level-item m-0">
                <a href="#" class="button track-item"></a>
                <a href="#" class="button track-item"></a>
                <a href="#" class="button track-item"></a>
                <a href="#" class="button track-item"></a>
                <a href="#" class="button track-item"></a>
                <a href="#" class="button track-item"></a>
                <a href="#" class="button track-item"></a>
                <a href="#" class="button track-item"></a>
                <a href="#" class="button track-item"></a>
                <a href="#" class="button track-item"></a>
                <a href="#" class="button track-item"></a>
                <a href="#" class="button track-item"></a>
                <a href="#" class="button track-item"></a>
                <a href="#" class="button track-item"></a>
                <a href="#" class="button track-item"></a>
                <a href="#" class="button track-item"></a>
            </div>
            <div class="level-item level-right buttons">
                <button class="button" title="Single">
                    <span class="icon is-small">
                        <i class="fa-solid fa-ear-listen"></i>
                    </span>
                </button>
                
                <button class="button" title="Mute">
                    <span class="icon is-small">
                        <i class="fa-solid fa-volume-xmark"></i>
                    </span>
                </button>
                <button class="button" title="Remove instrument">
                    <span class="icon is-small">
                        <i class="fa-solid fa-trash-can"></i>
                    </span>
                </button>
            </div>
        </div>

        <div class="box level has-background-light">
            <div class="level-item level-left">
                <p>Instrument</p>
            </div>
            <div class="buttons are-small level-item m-0">
                <a href="#" class="button track-item"></a>
                <a href="#" class="button track-item"></a>
                <a href="#" class="button track-item"></a>
                <a href="#" class="button track-item"></a>
                <a href="#" class="button track-item"></a>
                <a href="#" class="button track-item"></a>
                <a href="#" class="button track-item"></a>
                <a href="#" class="button track-item"></a>
                <a href="#" class="button track-item"></a>
                <a href="#" class="button track-item"></a>
                <a href="#" class="button track-item"></a>
                <a href="#" class="button track-item"></a>
                <a href="#" class="button track-item"></a>
                <a href="#" class="button track-item"></a>
                <a href="#" class="button track-item"></a>
                <a href="#" class="button track-item"></a>
            </div>
            <div class="level-item level-right buttons">
                <button class="button" title="Single">
                    <span class="icon is-small">
                        <i class="fa-solid fa-ear-listen"></i>
                    </span>
                </button>
                
                <button class="button" title="Mute">
                    <span class="icon is-small">
                        <i class="fa-solid fa-volume-xmark"></i>
                    </span>
                </button>
                <button class="button" title="Remove instrument">
                    <span class="icon is-small">
                        <i class="fa-solid fa-trash-can"></i>
                    </span>
                </button>
            </div>
        </div>

        <!-- Add new instrument -->

        <div class="level m-2">
            <div class="field is-grouped level-item level-left">
                <p class="control select">
                    <select>
                        <option>Add new instrument</option>
                    </select>
                </p>
                <p class="control">
                    <a href="#" class="button is-info">
                        Add
                    </a>
                </p>
            </div>
        </div>

    </div>

    <!-- Piano goes here -->
    <div class="block board is-justify-content-center">
        <input class="key white" type="button"/>
        <input class="key black" type="button"/>
        <input class="key white" type="button"/>
        <input class="key black" type="button"/>
        <input class="key white" type="button"/>

        <input class="key white" type="button"/>
        <input class="key black" type="button"/>
        <input class="key white" type="button"/>
        <input class="key black" type="button"/>
        <input class="key white" type="button"/>
        <input class="key black" type="button"/>
        <input class="key white" type="button"/>

        <input class="key white" type="button"/>
        <input class="key black" type="button"/>
        <input class="key white" type="button"/>
        <input class="key black" type="button"/>
        <input class="key white" type="button"/>

        <input class="key white" type="button"/>
        <input class="key black" type="button"/>
        <input class="key white" type="button"/>
        <input class="key black" type="button"/>
        <input class="key white" type="button"/>
        <input class="key black" type="button"/>
        <input class="key white" type="button"/>

        <input class="key white" type="button"/>
        <input class="key black" type="button"/>
        <input class="key white" type="button"/>
        <input class="key black" type="button"/>
        <input class="key white" type="button"/>

        <input class="key white" type="button"/>
        <input class="key black" type="button"/>
        <input class="key white" type="button"/>
        <input class="key black" type="button"/>
        <input class="key white" type="button"/>
        <input class="key black" type="button"/>
        <input class="key white" type="button"/>
    </div>

    <!-- Chat area -->
    <div>
        <div class="field is-grouped block">
            <p class="control is-expanded">
                <input type="text" class="input" placeholder="Message">
            </p>
            <p class="control">
                <a href="#" class="button is-info">
                    Send
                </a>
            </p>
        </div>

        <textarea class="textarea" rows="10" readonly></textarea>
    </div>
  </section>
</template>

<style lang="scss">
@import "index.scss";
</style>
