export async function getServerSideProps({ req }) {
  // ดึงข้อมูล cookie จาก request
  const devMode = process.env.NEXT_PUBLIC_DEV_MODE; // ค่า ENV ที่ได้จาก Vercel
  const isDev = req.cookies['dev-access']; // อ่านค่า cookie ชื่อ 'dev-access'

  // ตรวจสอบว่าเป็น dev หรือไม่
  if (devMode === "true" || isDev === "true") {
    // ถ้าเป็น dev ก็ให้แสดงหน้าเว็บปกติ
    return {
      props: {},
    };
  }

  // ถ้าไม่ใช่ dev ให้ทำการ redirect ไปที่หน้า coming-soon
  return {
    redirect: {
      destination: '/coming-soon.html',
      permanent: false, // ไม่ทำการ redirect ถาวร
    },
  };
}

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
    </div>
  );
}
