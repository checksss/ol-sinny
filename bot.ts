import 'dotenv/config'
import { AkairoClient, ListenerHandler } from 'discord-akairo'

class SyncoreBot extends AkairoClient {
  constructor() {
    super(
      { ownerID: '717195375731015732' },
      {
        disableMentions: 'everyone',
        presence: {
          status: 'online',
          activity: {
            name: 'Visit https://syn-core.com'
          }
        }
      }
    )

    // @ts-ignore
    this.listenerHandler = new ListenerHandler(this, {
      directory: './listeners/'
    })

    // @ts-ignore

    this.listenerHandler.loadAll()
  }
}

const bot = new SyncoreBot()

bot.login(process.env.BOT_TOKEN)
