import styled from "styled-components";
import React from "react";
import Title from "../Components/Title";
import blogs from "../data/blogs";
import { MainLayout, InnerLayout } from "../styles/Layout";

function BlogPage() {
  return (
    <MainLayout>
      <BlogStyled>
        <Title title={"Blogs"} span={""} />
        <InnerLayout className={"blog"}>
          {blogs.map((blog) => {
            return (
              <div key={blog.id} className={"blog-item"}>
                <div className="image">
                  <img src={blog.image} alt="" />
                </div>
                <div className="title">
                  <a href={blog.link}>{blog.title}</a>
                </div>
              </div>
            );
          })}
        </InnerLayout>
      </BlogStyled>
    </MainLayout>
  );
}

const BlogStyled = styled.div`
  .blog {
    display: grid;

    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 5rem;
    @media screen and (max-width: 1050px) {
      grid-template-columns: repeat(1, 1fr);
    }

    .blog-item {
      padding: 1rem 1rem;
      background-color: var(--background-dark-grey);
    }

    .image {
      width: 70%;

      overflow: hidden;
      img {
        width: 100%;

        transition: all 0.4s ease-in-out;
        &:hover {
          cursor: pointer;
          transform: rotate(5deg) scale(1.1);
        }
      }
    }

    .title {
      a {
        font-size: 1.5rem;
        padding: 0.6rem 0;
        color: var(--white-color);
        transition: all 0.4s ease-in-out;
        &:hover {
          color: var(--primary-color);
        }
      }
    }
  }
`;
export default BlogPage;
