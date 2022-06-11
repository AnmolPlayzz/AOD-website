<script lang="ts">
    import "fluent-svelte/theme.css";
    import { page } from "$app/stores";
    import { setContext } from "svelte/internal";
    import { Button, Checkbox, IconButton, TextBlock, ListItem } from "fluent-svelte";
    import { onMount } from "svelte/internal";
    import { add_attribute, add_classes, each } from "svelte/internal";
    import Home from "@fluentui/svg-icons/icons/home_24_regular.svg?raw";
    import News from "@fluentui/svg-icons/icons/news_24_regular.svg?raw";
    import Info from "@fluentui/svg-icons/icons/info_24_regular.svg?raw";
    const menus = [
      {name: "Home", url: "/home", classnm: "home", icon: Home},
      {name: "Commands", url: "/commands", classnm: "commands", icon: News},
      {name: "About", url: "/about", classnm: "about", icon: Info},
    ]

    let showMobileMenu = "hide";

    function toggleMobileMenu() {
        if(showMobileMenu == "show") {
            showMobileMenu = "hide";
        } else {
            showMobileMenu = "show";
        }
    }

    $: console.log(showMobileMenu);

  $: currentPage = $page.url.pathname;

</script>
<div class="tn2">
    <div class="drawer {showMobileMenu}">
        <div class="al">
            <IconButton class="mobbtn1" on:click={toggleMobileMenu}>
                <svg width="36" height="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2.75 18h18.5a.75.75 0 01.1 1.5H2.75a.75.75 0 01-.1-1.5h18.6-18.5zm0-6.5h18.5a.75.75 0 01.1 1.5H2.75a.75.75 0 01-.1-1.5h18.6-18.5zm0-6.5h18.5a.75.75 0 01.1 1.5H2.75a.75.75 0 01-.1-1.49h18.6-18.5z"></path></svg>
            </IconButton>
        {#each menus as { url, name, classnm, icon }}
        <ListItem
            class={`${url == "/"
                ? currentPage.match(url)
                : url === currentPage ? 'activeli' : ''} li`}
            href={url}>
            {name}
            </ListItem>
        {/each}
        </div>
    </div>
    <div class="mobnav">
        <div class="icon">
            <img src="/favicon.png" alt="logo" />
            <a href="/home">Art of Dragons</a>
        </div>

        <IconButton class="mobbtn" on:click={toggleMobileMenu}>
            <svg width="36" height="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2.75 18h18.5a.75.75 0 01.1 1.5H2.75a.75.75 0 01-.1-1.5h18.6-18.5zm0-6.5h18.5a.75.75 0 01.1 1.5H2.75a.75.75 0 01-.1-1.5h18.6-18.5zm0-6.5h18.5a.75.75 0 01.1 1.5H2.75a.75.75 0 01-.1-1.49h18.6-18.5z"></path></svg>
        </IconButton>
    </div>

</div>
<div class="tn">
<div class="icon">
        <img src="/favicon.png" alt="logo" />
        <a href="/home">Art of Dragons</a>
</div>
<div class="nav"> 
    {#each menus as { url, name, classnm, icon }}
        <IconButton
            class={`${url == "/"
                ? currentPage.match(url)
                : url === currentPage ? 'active' : ''} icon`}
            href={url}>
            {@html icon}
                <!-- svelte-ignore a11y-missing-attribute -->
                <TextBlock 
                    class={`${url == "/"
                    ? currentPage.match(url)
                    : url === currentPage ? 'active' : ''} icon`}>  
                        <!-- svelte-ignore a11y-missing-attribute -->
                    {name}
                </TextBlock>
        </IconButton>
    {/each}
</div>
</div>
<slot></slot>
 
<style lang="scss">

//thx to files.community website for thes scrollbar - https://github.com/files-community/Website

:root {
		color-scheme: dark;
		--mica-tint: 0, 0%, 13%;
		--mica-tint-opacity: 0.8;
	}

:global(.scroller) {
	overflow: auto;
	@supports (overflow: overlay) {
		overflow: overlay;
	}

	&::-webkit-scrollbar {
		display: block;
		inline-size: 14px;
		border-radius: 14px;

		&:vertical {
				--scrollbar-caret-top: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3E%3Cpath d='M6.10204 16.9814C5.0281 16.9814 4.45412 15.7165 5.16132 14.9083L10.6831 8.59765C11.3804 7.80083 12.6199 7.80083 13.3172 8.59765L18.839 14.9083C19.5462 15.7165 18.9722 16.9814 17.8983 16.9814H6.10204Z' fill='hsl(0, 0%, 100%, 0.545)'/%3E%3C/svg%3E");
				--scrollbar-caret-bottom: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3E%3Cpath d='M6.10204 8C5.0281 8 4.45412 9.2649 5.16132 10.0731L10.6831 16.3838C11.3804 17.1806 12.6199 17.1806 13.3172 16.3838L18.839 10.0731C19.5462 9.2649 18.9722 8 17.8983 8H6.10204Z' fill='hsl(0, 0%, 100%, 0.545)'/%3E%3C/svg%3E");
		}

		&:horizontal {
				--scrollbar-caret-top: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3E%3Cpath d='M9 17.8983C9 18.9722 10.2649 19.5462 11.0731 18.839L17.3838 13.3172C18.1806 12.6199 18.1806 11.3804 17.3838 10.6831L11.0731 5.16132C10.2649 4.45412 9 5.02809 9 6.10204V17.8983Z' fill='hsl(0, 0%, 0%, 0.447)'/%3E%3C/svg%3E");
				--scrollbar-caret-bottom: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3E%3Cpath d='M15 17.8983C15 18.9722 13.7351 19.5462 12.9268 18.839L6.61617 13.3172C5.81935 12.6199 5.81935 11.3804 6.61617 10.6831L12.9268 5.16132C13.7351 4.45412 15 5.02809 15 6.10204L15 17.8983Z' fill='hsl(0, 0%, 100%, 0.545)'/%3E%3C/svg%3E");
		}

		&:hover {
			background: var(--scrollbar-caret-bottom) bottom center/contain no-repeat,
			var(--scrollbar-caret-top) top center/contain no-repeat,
			hsl(var(--mica-tint), var(--mica-tint-opacity));
		}

		&-thumb {
			border: 6px solid transparent;
			border-block: none;
			border-radius: 14px;
			background: var(--fds-control-strong-fill-default);
			background-clip: padding-box;

			&:hover {
				border: 4px solid transparent;
			}
		}

		&-button:single-button {
			display: block;
			block-size: 14px;
		}
	}
}

    .tn2 {
        display: none
    }

    @font-face {
        font-family: 'Segoe UI';
        src: url('static/SegoeUI-VF.ttf') format('truetype');
    }

    * {
        font-family: 'Segoe UI';
    }

    :global(body) {
        background-color: #1a1a1a;
        margin: 0;
    }

    .nav {
        display: grid;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        padding: 15px;
        width: 300px;
        justify-self: end;
        grid-row: 2;
        margin-right: 100px;
        grid-auto-flow: column;
    }

    :global(a) {
		border-radius: var(--control-corner-radius);
		position: relative;
		text-decoration: none;
		color: var(--text-primary);
		transition: var(--control-fast-duration) var(--control-fast-out-slow-in-easing);
		padding: 5px 11px;
    }

    :global(.active) {
        color: hsl(191, 98%, 80%);
        font-weight: 600;
        --fds-subtle-fill-transparent: rgba(48, 48, 48, 0.2);
        --fds-text-primary: hsl(191, 98%, 80%);
    }

    :global(.icon svg) {
        padding-right: 5px;
        align-self: center;
    }

    :global(.icon) {
        padding: 0;
        font-weight: lighter;
    }

    .tn {
        width: 100vw;
        display: grid;
        border-bottom: 1px solid rgb(44, 44, 44);
        position: fixed;
        top: 0;
        left: 0;
        background-color: rgba(26, 26, 26, 0.8);
        backdrop-filter: blur(26px);
        z-index: 10;
    }

    .icon {
        justify-self: start;
        grid-row: 2;
        display: flex;
        align-items: center;
    }

    .icon img {
        height: 35px;
        border-radius: 100%;
        margin-left: 100px;
    }

    .icon a {
        margin-left: 0px;
        color: aliceblue;
        font-weight: bold;
        font-size: 18px;
    }

    .icon a:hover {
        color: rgb(185, 185, 185);
        font-weight: bold;
    }

    @media only screen and (max-width: 747px) {
        .tn {
            display: none;
        }

        .tn2 {
            display: grid;
            position: fixed;
            top: 0;
            left: 0;
        }

        .drawer {
            display: grid;
            position: fixed;
            right: 0;
            top: 0;
            height: 100vh;
            flex-direction: row;
            justify-content: space-between !important;
            align-items: center;
            padding: 1px;
            justify-self: end;
            justify-items: end;
            row-gap: 6px;
            grid-row: 3;
            margin-right: 2px;
            grid-auto-flow: row;
            border: 1px  solid  rgba(78, 78, 78, 0.541);
            border-radius: 10px 0px 0px 10px;
            margin: 0;
            align-content: start;
            background-color: rgba(26, 26, 26, 0.8);
            backdrop-filter: blur(50px);
            z-index: 7;
            transition: all 0.2s cubic-bezier(0.09, 0.69, 0, 1.02);
        }

        .al {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            margin-right: 8px;
        }

        :global(.activeli) {
                background-color: #ffffff0f !important;

        }
        :global(.activeli::before) {
            opacity: 1 !important;
            position: absolute;
            transform: scaleY(1) !important;
        }

        :global(.li) {
            width: 60vw !important;
        }

        :global(.mobbtn) {
            padding: 10px 10px !important;
            grid-row: 2;
            margin-right: 11px;
            width: fit-content;
            position: relative;
            z-index: 8 !important;
            background-color: rgba(26, 26, 26, 0.8);
        }

        :global(.mobbtn1) {
            padding: 10px 10px !important;
            grid-row: 2;
            width: fit-content;
            position: relative;
            z-index: 8 !important;
            justify-self: end;
            margin: 13px 2px 15px 2px;
        }

        .mobnav {
            display: grid;
            flex-direction: row;
            align-items: center;
            padding: 15px 0px;
            width: 100vw;
            justify-content: space-between;
            justify-self: end;
            grid-row: 2;
            grid-auto-flow: column;
            background-color: rgba(26, 26, 26, 0.8);
            backdrop-filter: blur(32px);
            z-index: 6;
            height: 36px;
        }

        .icon img {
            height: 35px;
            border-radius: 100%;
            margin-left: 0;
        }
        .show {
            transform: translateX(0);
        }

        .hide {
            transform: translateX(100%);
        }

        .mobnav .icon img {
            margin-left: 11px;
        }
    }

</style>