import { memo } from "react";
import { isEqual } from "lodash";

// const Li = memo(({ fullname }) => {
//   console.log(`renderizando ${fullname}`);
//   return <li>{fullname}</li>;
// });

//const MLi = memo(Li);

// const MyList = ({ data }) => {
//   console.log("renderizando lista");
//   return (
//     <ul>
//       {data.map((x) => (
//         //<MLi key={x.name + x.lastname} fullname={`${x.name} ${x.lastname}`} />
//         <Li key={x.name + x.lastname} fullname={`${x.name} ${x.lastname}`} />
//       ))}
//     </ul>
//   );
// };

// const Li = memo(
//   ({ children }) => {
//     console.log(`renderizando ${children}`);
//     return <li>{children}</li>;
//   },
//   (prev, post) => {
//     console.log(prev, post);
//   }
// );

const Li = memo(({ children }) => {
  console.log(`renderizando ${children}`);
  return <li>{children}</li>;
}, isEqual);

const MyList = ({ data }) => {
  console.log("renderizando lista");
  return (
    <ul>
      {data.map((x) => (
        //<MLi key={x.name + x.lastname} fullname={`${x.name} ${x.lastname}`} />
        <Li key={x.name + x.lastname}>
          {x.name} {x.lastname}
        </Li>
      ))}
    </ul>
  );
};

//export default MyList;
export default memo(MyList);
