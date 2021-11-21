const app = require('../app')
const PORT = process.env.PORT || 3000
const { main } = require('../db/connection')

const startLaunch = async () => {
  try {
    await main().then(console.log('Database connection successful'))
    app.listen(PORT)
  } catch (error) {
    console.error(`Failed to launch application with error: ${error.message}`)
    process.exit(1)
  }
}

startLaunch()
