<script>
    import "fluent-svelte/theme.css";
    import { page } from "$app/stores";
    import { Button, Checkbox, IconButton, TextBlock } from "fluent-svelte";
    import { each } from "svelte/internal";
    import Home from "@fluentui/svg-icons/icons/home_24_regular.svg?raw";
    import News from "@fluentui/svg-icons/icons/news_24_regular.svg?raw";
    import Info from "@fluentui/svg-icons/icons/info_24_regular.svg?raw";
  const menus = [
    {name: "Home", url: "/home", classnm: "home", icon: Home},
    {name: "Commands", url: "/commands", classnm: "commands", icon: News},
    {name: "About", url: "/about", classnm: "about", icon: Info},
  ]

  $: currentPage = $page.url.pathname;
</script>
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
    @font-face {
        font-family: 'Segoe UI';
        src: url('$static/SegoeUI-VF.ttf') format('truetype');
    }

    :root::-webkit-scrollbar {
      width: 10px;
    }
    
    :root::-webkit-scrollbar-track {
      background-color: #2f254800;
    
    }
    
    :root::-webkit-scrollbar-thumb {
      background-color: #a0a0a0;
      border-radius: 10px;
      border: 4.5px solid #1a1a1a;
    }
    
    :root::-webkit-scrollbar-thumb:hover {
      background: rgb(131, 130, 130);
      border-radius: 10px;
      border: 3px solid #1a1a1a;
    }

    * {
        font-family: 'Segoe UI';
    }

    :global(body) {
        background-color: #1a1a1a;
        margin: 0;
    }

    .nav {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        padding: 15px;
        width: 300px;
        justify-self: end;
        grid-row: 2;
        margin-right: 100px;
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
        margin: 0;
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

</style>