<script>
    	import "fluent-svelte/theme.css";
		import { Button, Checkbox, ListItem, TextBlock, InfoBar, ContentDialog, InfoBadge } from "fluent-svelte";
		import { add_classes } from "svelte/internal";

		let open = false;

		const timeline = [
    		  {date: "27 April 2021", desc: "The bot was created."},
    		  {date: "1 August 2021", desc: "I aka Anmol took control over the bot and became it's main Developer."},
    		  {date: "31 August 2021", desc: "The bot development switched from Scrath-for-Discord to Discord.js."},
			  {date: "3 September 2021", desc: "The bot was reworked to use the Slash commands and text commands at the same time."},
			  {date: "7 September 2021", desc: "The first image manipulation command was added."},
			  {date: "September 2021 - May 2022", desc: "Nothing much happened, just some minor bug fixes."},
			  {date: "24 May 2022", desc: "The bot has its final rewrite and text commands are completely removed."},
			  {date: "Now", desc: "The bot continues to be developed and maintained by me."},
    		]
		
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
	<Button variant="accent" href="https://discord.gg/GqbBYeuxSr" target="_blank">Discord server</Button>
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
			<TextBlock variant="title">Moderation</TextBlock>
			<br>
			<TextBlock variant="body" class="moddesc">A bunch of commands that help us inforce our rules on the server. These include mute, kick, ban, slowmode, and some others. They are also linked to a database which stores all our moderation history and can be retrieved using /warn.</TextBlock>
		</div>
		<div class="modtext">
			<img src="ms-fun.svg" alt="moderation" class="modimg">
			<br>
			<TextBlock variant="title">Fun</TextBlock>
			<br>
			<TextBlock variant="body" class="moddesc">
				The bot has several fun commands. They include image manipulation, memes, gif encoding, trolling commands, and much more.
			</TextBlock>
		</div>
		<div class="modtext">
			<img src="ms-game.svg" alt="moderation" class="modimg">
			<br>
			<TextBlock variant="title">Game</TextBlock>
			<br>
			<TextBlock variant="body" class="moddesc">
				We got serveral game commands including snake, would-you-rather and tic-tac-toe. You can play these games with other people on the server.
			</TextBlock>
		</div>
		<div class="modtext">
			<img src="ms-lvl.svg" alt="moderation" class="modimg">
			<br>
			<TextBlock variant="title">Leveling</TextBlock>
			<br>
			<TextBlock variant="body" class="moddesc">
				The bot has a leveling system. You can earn levels by chatting on the server and earning XP. You can also use the /level command to see your current level and XP.
			</TextBlock>
		</div>
	</section>
</div>

<div class="homept3">
	<div class="homept4">
		<InfoBadge class="featbadge">
			<TextBlock variant="body">Timeline</TextBlock>
		</InfoBadge>
	</div>
	<section class="sec2">
		{#each timeline as {date, desc}}
				<InfoBar class="sec1inf" severity="attention" title="{date}" message="{desc}" />
			<br>
		{/each}
	</section>
</div>
<div class="homept3 pt5">
	<div class="homept4">
		<InfoBadge class="featbadge">
			<TextBlock variant="body">The developer</TextBlock>
		</InfoBadge>
	</div>
	<section class="sec3">
		<div class="card"> 
			<img src="https://github.com/AnmolPlayzz/AnmolPlayzz.github.io/blob/main/images/img.png?raw=true" alt="anmol" class="anmol">
			<div class="cardtext">
					<TextBlock variant="title">Anmol</TextBlock>
					<br>
					<TextBlock variant="body" class="anmoldesc">
						Hey there, I'm Anmol! I'm a front-end and a Discord bot developer. I don't have a formal education but I do have a passion for coding and I'm currently working on this bot.
					</TextBlock>
			</div>
		</div>
	</section>
</div>

<div class="homept3">
	<div class="homept4">
		<InfoBadge class="featbadge1">
			<TextBlock variant="body">Open source</TextBlock>
		</InfoBadge>
	</div>
		<TextBlock variant="bodyLarge">This website is open source!</TextBlock>
		<br>
		<Button style="width: fit-content !important; margin: 0 auto;" variant="standard" href="https://github.com/AnmolPlayzz/Art-of-Dragons-website" target="_blank">GitHub</Button>
		<br>
		
</div>
<style>
	.main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		background-image: url(/bg.png);
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

	.homept3 {
		display: grid;
		justify-content: center;
	}

	.homept4 {
		display: grid;
		justify-content: center;
	}

	:global(.timebadge) {
		padding: 3px 9px !important;
		width: fit-content !important;
	}

	:global(.info-bar-close-button) {
		display: none !important;
	}

	.pt5 {
		background-color: hwb(0deg 13% 87%);
	}

	.sec2 {
		padding: 10px 10vw;
	}

	.card {
		
		margin: 0px 30px 20px 30px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding: 35px;
		border-radius: 10px;
		background-color: rgb(22, 22, 22);
		box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.5);
	}

	.anmol {
		height: 110px;
	}

	.cardtext {
		padding: 20px;
	}

	:global(.anmoldesc) {
		margin-top: 9px !important;
		max-width: 65ch;
		min-width: 30ch;
	}

	.sec3 {
		width: clamp(max-width, max-width, 80vw);
	}	

	:global(.featbadge1) {
		margin: 45px 0px 15px 0px !important;
		padding: 5px 15px !important;
		width: fit-content !important;
	}

	@media only screen and (max-width: 600px) {
		.card {
			flex-direction: column;
			width: 70vw;
		}
	}
</style>