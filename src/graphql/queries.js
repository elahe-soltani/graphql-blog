import { gql } from "@apollo/client"
const GET_BLOGS_INFO=gql`
query {
  posts {
    author {
      name
      avatar {
        url
      }
    }
    slug
    title
    id
    coverPhoto {
      url
    }
  }
}
`;

const GET_AUTHORS_INFO=gql`
query{
  authors {
    id
    name
    slug
    avatar {
      url
    }
  }
}
`;
const GET_AUTHOR_INFO=gql`
query getAuthorInfo($slug : String!){
  author(where: {slug:$slug }) {
    avatar {
      url
    }
    name
    field
    description {
      html
    }
    post {
      coverPhoto {
        url
      }
      slug
      title
      id
    }
  }
}
`;

const GET_POST_INFO = gql`
query getPost ($slug : String!){
  post(where: {slug: $slug}) {
    coverPhoto {
      url
    }
    title
    content {
      html
    }
    author {
      name
      field
      avatar {
        url
      }
    }
  }
}
`;
const GET_POST_COMMENTS =gql`
query getPostComments(
  $slug : String!
) {
  comments(where: {post: {slug: $slug}}) {
    id
    text
    name
  }
}
`;
export {GET_BLOGS_INFO,GET_AUTHORS_INFO , GET_AUTHOR_INFO , GET_POST_INFO , GET_POST_COMMENTS};