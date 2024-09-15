import LanguageSwitcher from "@/components/LanguageSwitcher";
import Content from "@/components/Layout/Content";
import TableData from "@/components/table/TableData";
import { useTranslations } from "next-intl";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button, Stack } from "react-bootstrap";

export default function Home() {
  const t = useTranslations();
  const router = useRouter();
  const columns = [
    { name: 'Name', set: (row: any) => <>{row.name}</> },
    { name: 'Age', set: (row: any) => <>{row.age}</> },
    { name: 'Location', set: (row: any) => <>{row.location}</> },
    { name: 'Gender', set: (row: any) => <>{row.gender}</> },
    {
      name: () => <div className="text-center">Action</div>,
      set: (row: any) =>
        <div className="d-flex gap-2">
          <Button variant="primary" size="sm" onClick={() => router.push(`/posts/${row.id}`)}>ดู</Button>
          <span>|</span>
          <Button variant="primary" size="sm">ลบ</Button>
          <span>|</span>
          <Button variant="primary" size="sm">แก้ไข</Button>
        </div>
    },
  ]
  const data = [
    {
      id: 1,
      name: 'Jo',
      age: 28,
      location: 'Bangkok',
      gender: 'female',
      contact: {
        email: 'jo@gmail.com',
        tel: '0812354555',
      },
    },
    {
      id: 2,
      name: 'Malon',
      age: 32,
      location: 'Chiang Mai',
    },
    {
      id: 3,
      name: 'Gamo',
      age: 25,
      location: 'Phuket',
    },
    {
      id: 4,
      name: 'Jo',
      age: 28,
      location: 'Bangkok',
    },
  ]

  const [myData, setMyData] = useState<any>(data)

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>{t("welcome")}</h1>
        <Content className="mb-3">
          <TableData
            data={myData}
            columns={columns}
            onSelectionChange={(data) => {
              console.log('..............Select Data', data)
            }}
          />
        </Content>
        <LanguageSwitcher />
      </div>
    </>
  );
}
