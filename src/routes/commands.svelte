<script>
	import { Button, Checkbox, ListItem, AutoSuggestBox, Expander, TextBlock } from "fluent-svelte";
	const misc = [
		{
			name: "Help",
			description: "Shows the help menu.",
			usage: "help"
		},
		{
			name: "Ping",
			description: "Shows the latency of the bot.",
			usage: "ping"
		},
		{
			name: "Info",
			description: "Shows the info of the bot.",
			usage: "info"
		}
	];
	const fun = [
		{
			name: "Say",
			description: "Make the bot immitate you.",
			usage: "say <message>"
		},
		{
			name: "Nitro",
			description: "Get free discord nitro!!!!!!!",
			usage: "nitro"
		},
		{
			name: "Trash",
			description: "Send a user into the trash can.",
			usage: "trash <user>"
		},
		{
			name: "Hug",
			description: "Give a user a hug.",
			usage: "hug <user>"
		},
		{
			name: "Sus",
			description: "Give a user a suspicious look.",
			usage: "sus <user>"
		},
		{
			name: "Desktop",
			description: "Put a user's PFP on the desktop.",
			usage: "desktop <user>"
		},
		{
			name: "Poo",
			description: "Make a user's avtar into poop.",
			usage: "poo <user>"
		},
		{
			name: "Prison",
			description: "Put a user inside the prison.",
			usage: "prison <user>"
		},
		{
			name: "Wasted",
			description: "Make a user look like they're dead.",
			usage: "wasted <user>"
		},
		{
			name: "Triggered",
			description: "Make a user look like they're triggered.",
			usage: "triggered <user>"
		},
		{
			name: "Clyde",
			description: "Make an imoge of clyde saying something.",
			usage: "clyde <message>"
		},
		{
			name: "Webss",
			description: "Get a screenshot of the given URL.",
			usage: "webss <url>"
		},
		{
			name: "Insult",
			description: "Insult a user.",
			usage: "insult <user>"
		},
		{
			name: "Meme",
			description: "Get a random meme.",
			usage: "meme"
		}
	];
	const util = [
		{
			name: "Avatar",
			description: "Get a user's avatar.",
			usage: "avatar <user>"
		},
		{
			name: "Membercount",
			description: "Get the membercount of the server.",
			usage: "membercount"
		},
		{
			name: "Countdown",
			description: "Countdown from a 3.",
			usage: "countdown"
		},

		{
			name: "Calc",
			description: "Get a button calculator.",
			usage: "calc"
		},
		{
			name: "Poll",
			description: "Create a poll.",
			usage: "poll <question> <time>"
		},
		{
			name: "Userinfo",
			description: "Get information about a user.",
			usage: "userinfo <user>"
		},
		{
			name: "Serverinfo",
			description: "Get information about the server.",
			usage: "serverinfo"
		},
		{
			name: "Roleinfo",
			description: "Get information about a role.",
			usage: "roleinfo <role>"
		},
		{
			name: "Roles",
			description: "Get a list of all roles.",
			usage: "roles"
		},
		{
			name: "Embed",
			description: "Create an embed.",
			usage: "embed"
		}
	];
	const discordtogether = [
		{
			name: "Yt",
			description: "Generate a YouTube together link.",
			usage: "yt"
		},
		{
			name: "Chess",
			description: "Generate a chess together link.",
			usage: "chess"
		}
	];
	const game = [
		{
			name: "Ttt",
			description: "Play Tic Tac Toe.",
			usage: "ttt <user>"
		},
		{
			name: "Snake",
			description: "Play Snake.",
			usage: "snake"
		},
		{
			name: "Wyr",
			description: "Play Would you rather.",
			usage: "wyr"
		},
	];
	const mod = [
		{
			name: "Ban",
			description: "Ban a user.",
			usage: "ban <user> <reason>"
		},
		{
			name: "Kick",
			description: "Kick a user.",
			usage: "kick <user> <reason>"
		},
		{
			name: "Mute",
			description: "Mute a user.",
			usage: "mute <user> <time> <reason>"
		},
		{
			name: "Warn",
			description: "Warn a user.",
			usage: "warn <user> <reason>"
		},
		{
			name: "Modlogs",
			description: "Get the modlogs of the user.",
			usage: "modlogs <user>"
		},
		{
			name: "Mylogs",
			description: "Get your logs.",
			usage: "mylogs"
		},
		{
			name: "Purge",
			description: "Purge messages.",
			usage: "purge <amount>"
		},
		{
			name: "Slowmode",
			description: "Set the slowmode of a channel.",
			usage: "slowmode <time> <channel> <reason>"
		},
	];
	const level = [
		{
			name: "Rank",
			description: "Get the rank of a user.",
			usage: "rank <user>"
		},
		{
			name: "Leaderboard",
			description: "Get the leaderboard.",
			usage: "leaderboard"
		},
		{
			name: "Setlevel",
			description: "Set the level of a user.",
			usage: "setlevel <user> <level>"
		},
	]
</script>

<svelte:head>
<meta name="description" content="All of Art of Dragon's commands!">
<title>Art of Dragons - Commands</title>
<meta property="og:image" content="/round.png">
<link rel="icon" href="/round.png" type="image/x-icon">
</svelte:head>

<div class="cmds">
	<div class="parts">
		<TextBlock class="head" variant="bodyStrong">Misc</TextBlock>
		{#each misc as {name, description, usage}}
			<Expander>
				{name}
				<svelte:fragment slot="content">
		
					<TextBlock variant="subtitle" >{description}</TextBlock>
					<p>
						<TextBlock variant="body" >Usage:</TextBlock> <span class="use">/{usage}</span>
					</p>
				</svelte:fragment>
			</Expander>
		{/each}	
	</div>
	<div class="parts">
		<TextBlock class="head" variant="bodyStrong">Fun</TextBlock>
		{#each fun as {name, description, usage}}
			<Expander>
				{name}
				<svelte:fragment slot="content">
		
					<TextBlock variant="subtitle" >{description}</TextBlock>
					<p>
						<TextBlock variant="body" >Usage:</TextBlock> <span class="use">/{usage}</span>
					</p>
				</svelte:fragment>
			</Expander>
		{/each}	
	</div>
	<div class="parts">
		<TextBlock class="head" variant="bodyStrong">Utility</TextBlock>
		{#each util as {name, description, usage}}
			<Expander>
				{name}
				<svelte:fragment slot="content">
		
					<TextBlock variant="subtitle" >{description}</TextBlock>
					<p>
						<TextBlock variant="body" >Usage:</TextBlock> <span class="use">/{usage}</span>
					</p>
				</svelte:fragment>
			</Expander>
		{/each}	
	</div>
	<div class="parts">
		<TextBlock class="head" variant="bodyStrong">Discord Together</TextBlock>
		{#each discordtogether as {name, description, usage}}
			<Expander>
				{name}
				<svelte:fragment slot="content">
		
					<TextBlock variant="subtitle" >{description}</TextBlock>
					<p>
						<TextBlock variant="body" >Usage:</TextBlock> <span class="use">/{usage}</span>
					</p>
				</svelte:fragment>
			</Expander>
		{/each}	
	</div>
	<div class="parts">
		<TextBlock class="head" variant="bodyStrong">Game</TextBlock>
		{#each game as {name, description, usage}}
			<Expander>
				{name}
				<svelte:fragment slot="content">
		
					<TextBlock variant="subtitle" >{description}</TextBlock>
					<p>
						<TextBlock variant="body" >Usage:</TextBlock> <span class="use">/{usage}</span>
					</p>
				</svelte:fragment>
			</Expander>
		{/each}	
	</div>
	<div class="parts">
		<TextBlock class="head" variant="bodyStrong">Moderation</TextBlock>
		{#each mod as {name, description, usage}}
			<Expander>
				{name}
				<svelte:fragment slot="content">
		
					<TextBlock variant="subtitle" >{description}</TextBlock>
					<p>
						<TextBlock variant="body" >Usage:</TextBlock> <span class="use">/{usage}</span>
					</p>
				</svelte:fragment>
			</Expander>
		{/each}	
	</div>
	<div class="parts">
		<TextBlock class="head" variant="bodyStrong">Level</TextBlock>
		{#each level as {name, description, usage}}
			<Expander>
				{name}
				<svelte:fragment slot="content">
		
					<TextBlock variant="subtitle" >{description}</TextBlock>
					<p>
						<TextBlock variant="body" >Usage:</TextBlock> <span class="use">/{usage}</span>
					</p>
				</svelte:fragment>
			</Expander>
		{/each}	
	</div>
</div>

<style>

	.cmds {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-top: 80px;
		width: 100%;
	}

	.use {
		font-family: monospace;
		background-color: rgb(43, 42, 42);
		padding: 3px;
		border-radius: 3px;
	}


	.parts {
		width: 86%;
		margin-bottom: 10px;
	}

	:global(.head) {
		margin: 2px 6px !important;
	}

	:global(body) {
		background-image: url(/bloom-mica-dark.png);
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		background-attachment: fixed;
	}

</style>
