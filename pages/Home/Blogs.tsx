// import axios from "axios";
// import Image from "next/image";

// // const getPosts = async () => {
// //   const response = await axios.get(
// //     "http://127.0.0.1:1337/api/posts?populate=*"
// //   );

// //   const data = response.data;
// //   return data;
// // };

// const Blogs = async () => {
//   // const posts = await getPosts();

//   return (
//     <>
//       <div className="container">
//         <div className="row">
//           <div className="col-md-12">
//             <h1>Blogs</h1>
//           </div>
//         </div>
//         {/* <div className="row">
//           {posts.data.map((post: any) => {
//             return (
//               <div className="col-md-4">
//                 <div className="card mb-4 shadow-sm">
//                   {post.attributes.thumbnail.data.map((image: any) => {
//                     return (
//                       <Image
//                         src={`http://127.0.0.1:1337${image.attributes.url}`} 
//                         className="card-img-top"
//                         width={300}
//                         height={300}
//                         alt="..."
//                       />
//                     );
//                   })}
//                   <div className="card-body">
//                     <h5 className="card-title">{post.title}</h5>
//                     <p className="card-text">{post.description}</p>
//                     <div className="d-flex justify-content-between align-items-center">
//                       <div className="btn-group">
//                         <a
//                           href={`/blogs/${post.slug}`}
//                           className="btn btn-sm btn-outline-secondary"
//                         >
//                           View
//                         </a>
//                       </div>
//                       <small className="text-muted">{post.author}</small>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div> */}
//       </div>
//     </>
//   );
// };

// export default Blogs;
