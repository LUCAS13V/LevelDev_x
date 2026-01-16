import os
import discord
from discord.ext import commands

#config basic, get permissions and set prefix
item = discord.Intents.all()
bot = commands.Bot("", intents=item)

#event when bot on
@bot.event
async def on_ready():
    print(f"{bot.status}")
@bot.event
async def oon_message(msg:discord.Message):
    if(msg.author.bot):
        return
    #await msg.reply(f'{msg.author}')
    print("ms recive")

#configs the commands
@bot.command()
#set ctx is type "command context"
async def aa(ctx:commands.Context):
    #info console
    print(f"\033[0;32m{ctx.author}\033[0;30m in chenal \033[0;32m{ctx.channel} \033[0;30m (rqt) > func > (ola)\033[0;40")
    #reponse the bot
    response = ctx.bot_permissions
    await ctx.reply(f"{response}")
    print(f"\033[0;32m reponse the bot \033[1;30m{response}\033[0;40m")
#start bot
