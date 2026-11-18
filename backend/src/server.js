import "dotenv/config";
import app from "./app.js";
import { connectDatabase } from "./config/database.js";

const PORT = process.env.PORT || 3000;

try {
  await connectDatabase(); // önce veritabanı, sonra sunucu
  app.listen(PORT, (err) => {
    // Express 5 port hatasını (ör. EADDRINUSE) buraya iletir
    if (err) {
      console.error(`Sunucu başlatılamadı: ${err.message}`);
      process.exit(1);
    }
    console.log(`API: http://localhost:${PORT}`);
  });
} catch (err) {
  console.error(`Bağlanılamadı: ${err.message}`);
  process.exit(1);
}
