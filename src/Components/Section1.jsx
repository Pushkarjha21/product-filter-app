import Section2 from "./Section2";
import Section1upper from "./Section1upper";
import Cartsection from "./Cart-section";

const Section1 = (props) => {
  return (
    <div>
      <div id="main">
        <Section1upper
          category={props.category}
          activecategory={props.activecategory}
          setactiveCategory={props.setactiveCategory}
          filtered={props.filtered}
          value={props.value}
          setValue={props.setValue}
          cart={props.cart}
          filterbyPrice={props.filterbyPrice}
          products={props.products}
          setactiveFilter={props.setactiveFilter}
          activefilter={props.activefilter}
          sorted={props.sorted}
        />

        <div id="section">
          {props.sorted.map(function (elem, idx) {
            return (
              <Section2
                key={idx}
                id={idx}
                name={elem.title}
                price={elem.price}
                image={elem.images[0]}
                stock={elem.stock}
                category={elem.category}
                value={props.value}
                setValue={props.setValue}
                value2={props.value2}
                filtered={props.filtered}
                product={elem}
                inCart={props.card2.some((item) => item.id === elem.id)}
                filterbyPrice={props.filterByPrice}
              />
            );
          })}
        </div>
      </div>
      <Cartsection
        setCard={props.setCard}
        value2={props.value2}
        card2={props.card2}
        cartItem={props.cartItem}
        removefromCart={props.removefromCart}
        enableBtn={props.enableBtn}
      />
    </div>
  );
};

export default Section1;
