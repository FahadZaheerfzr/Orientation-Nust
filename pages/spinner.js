import Layout from "../components/Layout";
import dynamic from "next/dynamic";

const Wheel = dynamic(() => import("../components/Wheel"), {
  ssr: false,
});

export default function spinner() {
  return (
    <>
      <Layout title={"Spinner Wheel"}>
        <div className={`mt-20`}>
          {typeof window !== undefined && <Wheel />}
        </div>
      </Layout>
    </>
  );
}
