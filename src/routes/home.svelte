<script>
    	import "fluent-svelte/theme.css";
		import { Button, Checkbox, ListItem, TextBlock, InfoBar, ContentDialog, InfoBadge } from "fluent-svelte";
		import { add_classes } from "svelte/internal";

		let open = false;
</script>

<ContentDialog darken title="Alpha stage!" bind:open>This website is in the Alpha Stage.
	<br>
	<Button slot="footer" variant="accent" on:click={() => (open = false)}>Close</Button>
</ContentDialog>

<article class="main">
	<img src="/favicon.png" alt="logo" class="homelogo">
	<TextBlock variant="title">Art of Dragons</TextBlock>
	<br>
	<TextBlock class="homedesc" variant="body">A multipurpose private Discord bot designed to be the only bot you need! Started as a small test but later turned into something much more complex. It has moderationn, fun commands, games and much more!</TextBlock>
	<br>
	<div class="homebtns">
	<Button variant="accent" href="">Discord server</Button>
	<Button variant="standard" href="/commands">Commands</Button>
	</div>

</article>
<div class="homept1">
	<div class="homept2">
	<InfoBadge class="featbadge">
		<TextBlock variant="body">Features</TextBlock>
	</InfoBadge>
	</div>
	<section class="sec1">
		<div class="modtext">
			<img src="ms-mod.svg" alt="moderation" class="modimg">
			<br>
			<TextBlock variant="subtitle">Moderation</TextBlock>
			<br>
			<TextBlock variant="body" class="moddesc">A bunch of commands that help us inforce our rules on the server. These include mute, kick, ban, slowmode, and some others. They are also linked to a database which stores all our moderation history and can be retrieved using /warn.</TextBlock>
		</div>
		<div class="modtext">
			<img src="ms-fun.svg" alt="moderation" class="modimg">
			<br>
			<TextBlock variant="subtitle">Fun</TextBlock>
			<br>
			<TextBlock variant="body" class="moddesc">
				The bot has several fun commands. They include image manipulation, memes, gif encoding, trolling commands, and much more.
			</TextBlock>
		</div>
		<div class="modtext">
			<img src="ms-game.svg" alt="moderation" class="modimg">
			<br>
			<TextBlock variant="subtitle">Game</TextBlock>
			<br>
			<TextBlock variant="body" class="moddesc">
				We got serveral game commands including snake, would-you-rather and tic-tac-toe. You can play these games with other people on the server.
			</TextBlock>
		</div>
		<div class="modtext">
			<img src="ms-lvl.svg" alt="moderation" class="modimg">
			<br>
			<TextBlock variant="subtitle">Leveling</TextBlock>
			<br>
			<TextBlock variant="body" class="moddesc">
				The bot has a leveling system. You can earn levels by chatting on the server and earning XP. You can also use the /level command to see your current level and XP.
			</TextBlock>
		</div>
	</section>
</div>
<style>
	.main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		background-image: url(/bg1.png);
		z-index: 2;
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		min-height: 575px;
		height: 100vh;
		border-bottom: 1.5px solid rgb(78, 78, 78);
	}

	.homebtns {
		display: flex;
		column-gap: 12px;
		overflow: hidden;
	}

	:global(.homedesc) {
		margin-top: 10px !important;
		margin-bottom: 15px !important;
		max-width: 60ch;
		min-width: 30ch;
		padding: 0px 20px !important;
	}

	.homelogo {
		border-radius: 100%;
		height: 140px;
		margin-bottom: 30px;
	}

	.homept1 {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		background-color: #212121;
	}

	.homept2 {
		display: grid;
		justify-content: center;
	}

	:global(.featbadge) {
		margin: 45px 0px 35px 0px !important;
		padding: 5px 15px !important;
		width: fit-content !important;
	}

	:global(.featbadge1) {
		padding: 5px 15px !important;
		width: fit-content !important;
	}

	.sec1 {
		display: grid;
		align-items: center;
		gap: 30px 40px;
		padding: 50px;
	}

	.modimg {
		height: 40px;
		margin-bottom: 3px !important;
	}

	:global(.moddesc) {
		margin-top: 9px !important;
		max-width: 65ch;
		min-width: 30ch;
	}
</style>