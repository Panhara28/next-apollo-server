import ContextType from "@/pages/api/context/ContextType";

export default async function TestQuery(_: any, {}, ctx: ContextType) {
  return "Hello world";
}
