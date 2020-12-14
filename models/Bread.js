import mongoose from "mongoose";
// mongoose를 통해 데이터들을 모델안에서 Bread 조회

const Schema = mongoose.Schema;
// mongoose.Schema 를 Schema 안에 넣는다.

const Bread = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { versionKey: false }
);

export default mongoose.model(`Bread`, Bread, `Bread`);
// export default를 하여 외부에서도 사용 가능하게 만들어준다.
// (`별칭`, 실제 객체 , `몽고DB안에 있는 진짜 별칭스키마는 뭔데?`)
