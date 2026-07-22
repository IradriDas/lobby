type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function Meeting({ params }: Props) {
  const { id } = await params;

  return <div>Meeting id: {id}</div>;
}