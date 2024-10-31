import React, { useRef, useEffect, useState, useCallback } from "react";
import "../pages/styles/icook.css";

export default function ICook() {
  const columnsRef = useRef([]);
  const [allMode, setAllMode] = useState(false);

  const createScrollHandler = useCallback((index) => {
    return () => {
      if (columnsRef.current[index]) {
        const { scrollTop, scrollLeft } = columnsRef.current[index];
        columnsRef.current.forEach((col, i) => {
          if (i !== index && col) {
            col.scrollTop = scrollTop;
            col.scrollLeft = scrollLeft;
          }
        });
      }
    };
  }, []);

  useEffect(() => {
    if (allMode) {
      columnsRef.current.forEach((col, index) => {
        if (col) {
          const scrollHandler = createScrollHandler(index);
          col.addEventListener("scroll", scrollHandler);
          col.scrollHandler = scrollHandler;
        }
      });

      return () => {
        columnsRef.current.forEach((col) => {
          if (col && col.scrollHandler) {
            col.removeEventListener("scroll", col.scrollHandler);
            delete col.scrollHandler;
          }
        });
      };
    } else {
      columnsRef.current.forEach((col) => {
        if (col && col.scrollHandler) {
          col.removeEventListener("scroll", col.scrollHandler);
          delete col.scrollHandler;
        }
      });
    }
  }, [allMode, createScrollHandler]);

  const disableAllMode = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setAllMode(false);
  };

  const enableAllMode = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setAllMode(true);
  };

  const columns = [
    {
      title: "Column1",
      content: [
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Interdum augue orci semper interdum magnis accumsan posuere dis. Ut cubilia viverra sagittis ipsum leo litora. Ornare augue enim fermentum ipsum netus id vulputate consectetur. Est ut habitant porttitor elit curabitur elit. Amet imperdiet massa sociosqu curae sollicitudin mauris primis fames. Nisl scelerisque luctus nunc purus in. Finibus facilisi taciti posuere suspendisse justo fusce integer in. Quam elit lectus lacus habitasse; eu tincidunt ante dui. Condimentum bibendum lorem praesent curae donec nec leo. Imperdiet lectus facilisi, varius ad auctor nascetur. Primis vehicula potenti proin consectetur taciti praesent posuere ac tristique. Dolor semper quam lacinia class; habitant volutpat enim ultrices. Ex primis morbi commodo montes aliquet convallis diam tortor. Accumsan posuere nibh auctor suspendisse himenaeos mus varius mi. Sit volutpat placerat cubilia netus venenatis. Varius montes curabitur conubia ex mattis. Fames tempus per ac; mollis gravida curabitur libero commodo dictum. Semper fringilla libero finibus scelerisque suspendisse at sagittis dictum. Aenean scelerisque nostra platea quisque integer; quam mollis iaculis. Consectetur nisl laoreet aptent nunc hendrerit aliquam penatibus. Penatibus nam inceptos habitasse facilisi bibendum blandit. Fermentum varius purus ut volutpat; fringilla sed magna. Mollis dignissim primis aliquam, efficitur posuere cubilia aliquet! Facilisi mi gravida justo ex dictumst? Nascetur magnis aliquet leo sed magnis ad risus. Mattis vel faucibus ligula per quisque quis feugiat. Sit aenean dui quisque fringilla eleifend feugiat. Eleifend vel potenti urna libero; hac litora taciti a? Rhoncus ipsum viverra mi vitae cras dictumst inceptos. Sit vestibulum egestas nulla eros molestie. Tincidunt ornare sollicitudin sagittis; ultrices fringilla ac etiam. Adipiscing vulputate sapien volutpat suspendisse netus sapien. Cras sed convallis venenatis tincidunt phasellus ante fringilla velit.",
        " Sapien posuere integer turpis himenaeos laoreet dictum elementum aptent ex. Adipiscing duis augue aenean varius class maecenas et. Ante ligula platea dui habitasse vulputate primis nisi nec. Dictum tempor malesuada nunc ut diam fermentum cras. Per consectetur lectus scelerisque sit proin volutpat inceptos lectus scelerisque. Auctor bibendum consequat aenean cursus feugiat non feugiat. Egestas risus nascetur nunc at ridiculus. Laoreet curae at at magna, interdum mus fermentum. Magnis at donec volutpat ad maecenas. Vestibulum in metus integer facilisis eleifend vel venenatis euismod. Morbi nibh morbi egestas ridiculus adipiscing. Nec nibh varius ultrices nascetur litora, congue mus semper. Nunc tincidunt scelerisque viverra eros tempor. Mi rhoncus sapien dis in velit. Vivamus potenti proin auctor mauris condimentum urna congue auctor. Arcu ornare proin bibendum arcu aliquam integer justo. Vehicula tempus taciti ultrices accumsan potenti sapien nam vitae. Elit quisque per aliquet vehicula primis hac montes. Egestas adipiscing habitasse lobortis enim, ultricies faucibus? Egestas quis amet eu nec eros? Torquent donec pellentesque molestie velit eros. Vestibulum sed adipiscing porta elementum, parturient urna lacus. Duis augue sollicitudin tellus sed duis lorem habitasse amet. Penatibus justo lobortis et massa facilisis aliquet. Morbi natoque adipiscing rutrum; viverra rutrum nisi? Hac venenatis purus metus malesuada egestas habitasse cras mattis in. Pretium porttitor efficitur in viverra vulputate vivamus aliquet. Duis torquent molestie eleifend risus blandit ultricies dictumst consectetur scelerisque. Purus placerat ante purus facilisis leo? Commodo nam curae velit consequat nunc aliquam turpis tempus. Habitant etiam neque ac phasellus vehicula penatibus euismod. Posuere vestibulum sed per gravida, fames dolor efficitur. Aliquet purus mollis odio; facilisi facilisis molestie facilisis? Sociosqu purus mauris litora molestie molestie interdum ac. Proin duis faucibus ultrices tortor tellus penatibus gravida rutrum ultrices. Torquent morbi ultricies blandit, nam bibendum convallis aptent neque. Magnis sed interdum facilisi arcu at porta vivamus. Placerat aliquam torquent pretium iaculis malesuada, porttitor vestibulum fusce. Nunc vehicula gravida lacus ut ornare convallis amet nunc. Ac non fames magnis feugiat augue, sit ut. Mus ante dapibus dis faucibus suscipit est nisi euismod. Nec ornare quisque vitae sapien libero nulla. Adipiscing sociosqu leo pellentesque lacus vitae sagittis. Metus ut libero convallis quam in ad. Dignissim feugiat conubia praesent nascetur vehicula viverra.",
      ],
      images: [],
      style: { backgroundColor: "white" },
    },
    {
      title: "Column2",
      content: [
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Interdum augue orci semper interdum magnis accumsan posuere dis. Ut cubilia viverra sagittis ipsum leo litora. Ornare augue enim fermentum ipsum netus id vulputate consectetur. Est ut habitant porttitor elit curabitur elit. Amet imperdiet massa sociosqu curae sollicitudin mauris primis fames. Nisl scelerisque luctus nunc purus in. Finibus facilisi taciti posuere suspendisse justo fusce integer in. Quam elit lectus lacus habitasse; eu tincidunt ante dui. Condimentum bibendum lorem praesent curae donec nec leo. Imperdiet lectus facilisi, varius ad auctor nascetur. Primis vehicula potenti proin consectetur taciti praesent posuere ac tristique. Dolor semper quam lacinia class; habitant volutpat enim ultrices. Ex primis morbi commodo montes aliquet convallis diam tortor. Accumsan posuere nibh auctor suspendisse himenaeos mus varius mi. Sit volutpat placerat cubilia netus venenatis. Varius montes curabitur conubia ex mattis. Fames tempus per ac; mollis gravida curabitur libero commodo dictum. Semper fringilla libero finibus scelerisque suspendisse at sagittis dictum. Aenean scelerisque nostra platea quisque integer; quam mollis iaculis. Consectetur nisl laoreet aptent nunc hendrerit aliquam penatibus. Penatibus nam inceptos habitasse facilisi bibendum blandit. Fermentum varius purus ut volutpat; fringilla sed magna. Mollis dignissim primis aliquam, efficitur posuere cubilia aliquet! Facilisi mi gravida justo ex dictumst? Nascetur magnis aliquet leo sed magnis ad risus. Mattis vel faucibus ligula per quisque quis feugiat. Sit aenean dui quisque fringilla eleifend feugiat. Eleifend vel potenti urna libero; hac litora taciti a? Rhoncus ipsum viverra mi vitae cras dictumst inceptos. Sit vestibulum egestas nulla eros molestie. Tincidunt ornare sollicitudin sagittis; ultrices fringilla ac etiam. Adipiscing vulputate sapien volutpat suspendisse netus sapien. Cras sed convallis venenatis tincidunt phasellus ante fringilla velit. Sapien posuere integer turpis himenaeos laoreet dictum elementum aptent ex. Adipiscing duis augue aenean varius class maecenas et. Ante ligula platea dui habitasse vulputate primis nisi nec. Dictum tempor malesuada nunc ut diam fermentum cras. Per consectetur lectus scelerisque sit proin volutpat inceptos lectus scelerisque. Auctor bibendum consequat aenean cursus feugiat non feugiat. Egestas risus nascetur nunc at ridiculus. Laoreet curae at at magna, interdum mus fermentum. Magnis at donec volutpat ad maecenas. Vestibulum in metus integer facilisis eleifend vel venenatis euismod. Morbi nibh morbi egestas ridiculus adipiscing. Nec nibh varius ultrices nascetur litora, congue mus semper. Nunc tincidunt scelerisque viverra eros tempor. Mi rhoncus sapien dis in velit. Vivamus potenti proin auctor mauris condimentum urna congue auctor. Arcu ornare proin bibendum arcu aliquam integer justo. Vehicula tempus taciti ultrices accumsan potenti sapien nam vitae. Elit quisque per aliquet vehicula primis hac montes. Egestas adipiscing habitasse lobortis enim, ultricies faucibus? Egestas quis amet eu nec eros? Torquent donec pellentesque molestie velit eros. Vestibulum sed adipiscing porta elementum, parturient urna lacus. Duis augue sollicitudin tellus sed duis lorem habitasse amet. Penatibus justo lobortis et massa facilisis aliquet. Morbi natoque adipiscing rutrum; viverra rutrum nisi? Hac venenatis purus metus malesuada egestas habitasse cras mattis in. Pretium porttitor efficitur in viverra vulputate vivamus aliquet. Duis torquent molestie eleifend risus blandit ultricies dictumst consectetur scelerisque. Purus placerat ante purus facilisis leo? Commodo nam curae velit consequat nunc aliquam turpis tempus. Habitant etiam neque ac phasellus vehicula penatibus euismod. Posuere vestibulum sed per gravida, fames dolor efficitur. Aliquet purus mollis odio; facilisi facilisis molestie facilisis? Sociosqu purus mauris litora molestie molestie interdum ac. Proin duis faucibus ultrices tortor tellus penatibus gravida rutrum ultrices. Torquent morbi ultricies blandit, nam bibendum convallis aptent neque. Magnis sed interdum facilisi arcu at porta vivamus. Placerat aliquam torquent pretium iaculis malesuada, porttitor vestibulum fusce. Nunc vehicula gravida lacus ut ornare convallis amet nunc. Ac non fames magnis feugiat augue, sit ut. Mus ante dapibus dis faucibus suscipit est nisi euismod. Nec ornare quisque vitae sapien libero nulla. Adipiscing sociosqu leo pellentesque lacus vitae sagittis. Metus ut libero convallis quam in ad. Dignissim feugiat conubia praesent nascetur vehicula viverra.",
      ],
      images: [],
      style: { backgroundColor: "white" },
    },
  ];

  return (
    <div>
      <div className="divider"></div>
      <h2 className="icook-title">ICOOK: FULL STACK WEB DEVELOPMENT</h2>
      <div className="container" onClick={(e) => enableAllMode(e)}>
        {columns.map((col, index) => (
          <div
            key={index}
            className="column"
            onClick={(e) => disableAllMode(e)}
            ref={(el) => (columnsRef.current[index] = el)}
            style={col.style}
          >
            <div className="content">
              {col.content.map((paragraph, paraIndex) => (
                <p key={paraIndex} className="document-text">
                  {paragraph}
                </p>
              ))}
              {col.images.map((imgSrc, imgIndex) => (
                <img
                  key={imgIndex}
                  src={imgSrc}
                  alt={`Column ${index + 1} Image ${imgIndex + 1}`}
                  className="column-image"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
