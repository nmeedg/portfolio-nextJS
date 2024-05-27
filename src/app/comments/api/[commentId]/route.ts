import { redirect } from "next/navigation";
import data from "../../data";

export async function GET(
  request: Request,
  { params }: { params: { commentId: string } }
) {
  if (parseInt(params.commentId) > data.length) {
    redirect("/comments/api");
  }
  const comment = data.find((e) => e.id === parseInt(params.commentId));
  return Response.json(comment);
}

export async function PATCH(
  request: Request,
  { params }: { params: { commentId: string } }
) {
  if (parseInt(params.commentId) > data.length) {
    redirect("/comments");
  }
  const { text } = await request.json();
  const index = data.findIndex((e) => e.id === parseInt(params.commentId));
  data[index].text = text;
  return Response.json(data[index]);
}

export async function DELETE(
  request: Request,
  { params }: { params: { commentId: string } }
) {
  const index = data.findIndex((e) => e.id === parseInt(params.commentId));
  const deletedComment = data[index];
  data.splice(index, 1);
  return Response.json(deletedComment);
}
