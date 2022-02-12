import React from "react";
import Layout from "./Layout";
import { useRouter } from "next/router";

const Dashboard = () => {
  const { query } = useRouter();
  return (
    <div className="dashboard">
      <Layout>
        <div className="dashboard-content">
          {query.dashboard}
          {query.param}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
          necessitatibus repellat nostrum atque eius velit aliquid illo enim
          debitis repellendus vero suscipit facere consequatur excepturi laborum
          dolorum aut quos voluptas quod minus distinctio, assumenda perferendis
          laboriosam incidunt? Praesentium reiciendis aspernatur similique hic,
          deserunt consequatur impedit autem facilis. Nemo, optio! Placeat,
          temporibus ea? Tempora dolore ratione quibusdam recusandae laborum
          odio ducimus facilis eius nesciunt? Tempora voluptatum repellendus
          vitae labore modi consectetur dignissimos nobis? Eos mollitia itaque
          maxime corrupti explicabo est aut doloribus voluptatum? Accusamus
          fugit odio libero aperiam quae expedita assumenda esse ullam nostrum
          eligendi, ipsa minima quibusdam porro impedit reprehenderit. Mollitia
          deleniti dolorum molestias ipsam ex blanditiis maiores ab ipsa,
          cumque, esse sunt laborum voluptates non expedita unde? Corrupti
          corporis eum atque! Optio omnis qui ipsa nam adipisci dicta molestias
          saepe, at numquam ducimus tempora dolores odit inventore incidunt
          temporibus soluta quos odio! Repellendus deserunt molestiae veniam
          fugiat exercitationem ipsam mollitia, porro culpa corporis ipsum
          quibusdam perspiciatis, dolorem repellat esse ipsa. Assumenda
          voluptatum tempore nihil. Nostrum doloribus maxime molestiae quam,
          excepturi ratione nam amet praesentium non dicta nisi dolorem aperiam
          ipsa, nesciunt eos quo totam, tempore in impedit tempora corrupti
          aliquid reiciendis fugit adipisci? Ipsa sint et voluptate nesciunt
          repellendus a pariatur temporibus. Repellendus commodi vel dolor
          maiores delectus unde iste saepe, culpa voluptate minus excepturi
          iusto optio fuga. Doloremque exercitationem quae provident repellendus
          temporibus qui, soluta magni consectetur ullam sunt distinctio
          voluptatibus asperiores a quaerat quos aliquam dolorem, doloribus,
          libero perferendis hic vitae odit ratione. Sint iste exercitationem
          rerum libero reiciendis quod accusantium minima illo cupiditate dolor
          placeat aliquam expedita, accusamus commodi in saepe quam error omnis
          ullam doloribus nulla odit. Laborum dolor porro tempora harum minima
          deserunt id sit excepturi. Quam voluptas ut laborum ratione porro
          repudiandae, modi blanditiis minima eius illo perspiciatis molestiae
          error facere delectus praesentium, harum vel non quod mollitia
          laudantium omnis est quae. Maxime, voluptatibus sequi deserunt
          asperiores consequatur eaque perspiciatis nesciunt tenetur reiciendis,
          fugiat fuga recusandae. Voluptatem ipsam deserunt nulla assumenda
          perferendis molestias omnis quaerat nemo! Unde obcaecati nulla, in,
          labore consectetur voluptate eum quaerat facere nam deleniti dolores
          quas nesciunt quia porro quos, ab rerum nostrum culpa alias maxime
          eius mollitia. Facere, nulla? Veniam nisi expedita ipsum, excepturi
          recusandae dolores non voluptate? Ipsa placeat laborum officia sunt
          aliquid dolore doloribus beatae, provident mollitia sint? Ea delectus
          at, ullam iste nostrum ipsa repellat pariatur deleniti commodi quam
          sapiente aliquam! Delectus distinctio dignissimos quas sapiente
          consequuntur vitae quisquam dolor praesentium ratione porro excepturi
          perferendis fuga repellat veritatis ex, libero laboriosam! Error sunt
          laborum vero eos, quia dolores rerum ipsa eaque explicabo architecto
          inventore repudiandae laboriosam voluptas nesciunt a doloribus
          molestiae nisi voluptatum quaerat suscipit labore sapiente! Impedit
          nemo quas in nesciunt porro modi molestias! Porro natus autem est vel,
          et assumenda quod obcaecati fugiat? Saepe cum quas omnis nemo
          assumenda maxime laboriosam explicabo aspernatur hic? Temporibus enim
          cupiditate tempora placeat omnis vero, provident earum sint culpa
          aliquam quam numquam vel voluptatum cumque quasi minima atque
          voluptates nihil! Nemo deserunt ex tenetur blanditiis! In quisquam
          necessitatibus consequatur sequi, nobis corrupti fuga nulla maiores
          libero veritatis et accusantium at numquam dolores excepturi nisi!
          Saepe soluta error veritatis veniam quisquam! Sint nesciunt porro,
          iste sunt expedita quisquam labore provident doloribus perferendis.
          Dignissimos laudantium ipsa veritatis facilis repellat, officiis
          quasi? Deserunt hic facilis eveniet, quibusdam enim
        </div>
      </Layout>
    </div>
  );
};

export default Dashboard;
