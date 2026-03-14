const o=`
<Accordion.Item eventKey="0">
      <Accordion.Header>Accordion Item #1</Accordion.Header>
      <Accordion.Body> <strong>This is the first item's accordion body.</strong> It is shown by
           default, until the collapse plugin adds the appropriate classes that we
           use to style each element. These classes control the overall appearance, as
           well as the showing and hiding via CSS transitions. You can modify any of this with
           custom CSS or overriding our default variables. It's also worth noting that
           just  about any HTML can go within the <code>.accordion-body</code>, though the
           transition does limit overflow.
      </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
      <Accordion.Header>Accordion Item #2</Accordion.Header>
      <Accordion.Body><strong>This is the second item's accordion body.</strong> It is hidden
          by default, until the collapse plugin adds the appropriate classes that we
          use to style each element. These classes control the overall appearance, as
          well as the showing and hiding via CSS transitions. You can modify any of this with
          custom CSS or overriding our default variables. It's also worth noting that
          just about any HTML can go within the <code>.accordion-body</code>, though the
          transition does limit overflow.
      </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
      <Accordion.Header>Accordion Item #3</Accordion.Header>
      <Accordion.Body><strong>This is the third item's accordion body.</strong> It is hidden
        by default, until the collapse plugin adds the appropriate classes that we
        use to style each element. These classes control the overall appearance, as
        well as the showing and hiding via CSS transitions. You can modify any of this with
        custom CSS or overriding our default variables. It's also worth noting that
        just about  any HTML can go within the <code>.accordion-body</code>, though the
        transition  does limit overflow.
      </Accordion.Body>
      </Accordion.Item>
      </Accordion>`,e=`
import SpkAccordions from "@/shared/@spk-reusable-components/reusable-advancedui/spk-accordions";

 <SpkAccordions items={Basicdata} defaultActiveKey="1" />`,a=`
<Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
      <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body> <strong>This is the first item's accordion body.</strong> It is shown by
       default, until the collapse plugin adds the appropriate classes that we
        use to style each element. These classes control the overall appearance, as
        well as the showing and hiding via CSS transitions. You can modify any of this with
        custom CSS or overriding our default variables. It's also worth noting that
          just  about any HTML can go within the <code>.accordion-body</code>, though the
           transition does limit overflow.
       </Accordion.Body>
      </Accordion.Item>
       <Accordion.Item eventKey="1">
      <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body><strong>This is the second item's accordion body.</strong> It is hidden
         by default, until the collapse plugin adds the appropriate classes that we
         use to style each element. These classes control the overall appearance, as
         well as the showing and hiding via CSS transitions. You can modify any of this with
         custom CSS or overriding our default variables. It's also worth noting that
         just about any HTML can go within the <code>.accordion-body</code>, though the
         transition does limit overflow.
       </Accordion.Body>
      </Accordion.Item>
         <Accordion.Item eventKey="2">
      <Accordion.Header>Accordion Item #3</Accordion.Header>
        <Accordion.Body><strong>This is the third item's accordion body.</strong> It is hidden
         by default, until the collapse plugin adds the appropriate classes that we
         use to style each element. These classes control the overall appearance, as
         well as the showing and hiding via CSS transitions. You can modify any of this with
         custom CSS or overriding our default variables. It's also worth noting that
         just about any HTML can go within the <code>.accordion-body</code>, though the
         transition  does limit overflow.
       </Accordion.Body>
        </Accordion.Item>
      </Accordion>`,t=` 
import SpkAccordions from "@/shared/@spk-reusable-components/reusable-advancedui/spk-accordions";

<SpkAccordions items={Basicdata} defaultActiveKey="1" />`,s=`
<Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>Placeholder content for this accordion,
           which isintended to demonstrate the <code>.accordion-flush</code> class.
           This is the first item's accordion body.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>which is intended to demonstrate the <code>.accordion-flush</code> class.
           This is thesecond item's accordion body. Let's imagine this being filled
           with some actual content.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>Placeholder content for this accordion,
            which is intended to demonstrate the <code>.accordion-flush</code> class.
            This is the third item's accordion body. Nothing more exciting happening
            here in  terms of content, but just filling up the space to make it look, at
            least at first glance, a bit more representative of how this would look in a
            real-world application.
        </Accordion.Body>
      </Accordion.Item>
      </Accordion> `,i=`
import SpkAccordions from "@/shared/@spk-reusable-components/reusable-advancedui/spk-accordions";

<SpkAccordions items={Flushdata} flush={true} closeAll={true} accordionClass="accordion-flush" />
`,c=`
<Accordion defaultActiveKey="0" className="accordion accordion-solid-primary">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body> <strong>This is the first item's accordion body.</strong> It is shown by
           default, until the collapse plugin adds the appropriate classes that we
           use to style each element. These classes control the overall appearance, as
           well as the showing and hiding via CSS transitions. You can modify any of this with
           custom CSS or overriding our default variables. It's also worth noting that
           just  about any HTML can go within the <code>.accordion-body</code>, though the
           transition does limit overflow.
      </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body><strong>This is the second item's accordion body.</strong> It is hidden
         by default, until the collapse plugin adds the appropriate classes that we
         use to style each element. These classes control the overall appearance, as
         well as the showing and hiding via CSS transitions. You can modify any of this with
         custom CSS or overriding our default variables. It's also worth noting that
         just about any HTML can go within the <code>.accordion-body</code>, though the
         transition does limit overflow.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Accordion Item #3</Accordion.Header>
         <Accordion.Body><strong>This is the third item's accordion body.</strong> It is hidden
          by default, until the collapse plugin adds the appropriate classes that we
          use to style each element. These classes control the overall appearance, as
          well as the showing and hiding via CSS transitions. You can modify any of this with
          custom CSS or overriding our default variables. It's also worth noting that
          just about  any HTML can go within the <code>.accordion-body</code>, though the
          transition  does limit overflow.
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>`,n=`
import SpkAccordions from "@/shared/@spk-reusable-components/reusable-advancedui/spk-accordions";

 <SpkAccordions items={Basicdata} accordionClass="accordion-solid-primary" defaultActiveKey="1" />`,d=`
<Accordion defaultActiveKey="0" className="accordion accordion-solid-secondary">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body> <strong>This is the first item's accordion body.</strong> It is shown by
           default, until the collapse plugin adds the appropriate classes that we
           use to style each element. These classes control the overall appearance, as
           well as the showing and hiding via CSS transitions. You can modify any of this with
           custom CSS or overriding our default variables. It's also worth noting that
           just  about any HTML can go within the <code>.accordion-body</code>, though the
           transition does limit overflow.
      </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
      <Accordion.Header>Accordion Item #2</Accordion.Header>
      <Accordion.Body><strong>This is the second item's accordion body.</strong> It is hidden
        by default, until the collapse plugin adds the appropriate classes that we
        use to style each element. These classes control the overall appearance, as
        well as the showing and hiding via CSS transitions. You can modify any of this with
        custom CSS or overriding our default variables. It's also worth noting that
        just about any HTML can go within the <code>.accordion-body</code>, though the
        transition does limit overflow.
       </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
       <Accordion.Header>Accordion Item #3</Accordion.Header>
       <Accordion.Body><strong>This is the third item's accordion body.</strong> It is hidden
         by default, until the collapse plugin adds the appropriate classes that we
         use to style each element. These classes control the overall appearance, as
         well as the showing and hiding via CSS transitions. You can modify any of this with
         custom CSS or overriding our default variables. It's also worth noting that
         just about  any HTML can go within the <code>.accordion-body</code>, though the
         transition  does limit overflow.
       </Accordion.Body>
      </Accordion.Item>
      </Accordion>`,l=`
import SpkAccordions from "@/shared/@spk-reusable-components/reusable-advancedui/spk-accordions";

  <SpkAccordions items={Basicdata} accordionClass="accordion-solid-secondary" defaultActiveKey="1" />`,r=`
<Accordion defaultActiveKey="0" className="accordion accordion-primary">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body> <strong>This is the first item's accordion body.</strong> It is shown by
           default, until the collapse plugin adds the appropriate classes that we
           use to style each element. These classes control the overall appearance, as
           well as the showing and hiding via CSS transitions. You can modify any of this with
           custom CSS or overriding our default variables. It's also worth noting that
           just  about any HTML can go within the <code>.accordion-body</code>, though the
           transition does limit overflow.
       </Accordion.Body>
       </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body><strong>This is the second item's accordion body.</strong> It is hidden
        by default, until the collapse plugin adds the appropriate classes that we
        use to style each element. These classes control the overall appearance, as
        well as the showing and hiding via CSS transitions. You can modify any of this with
        custom CSS or overriding our default variables. It's also worth noting that
        just about any HTML can go within the <code>.accordion-body</code>, though the
        transition does limit overflow.
         </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Accordion Item #3</Accordion.Header>
         <Accordion.Body><strong>This is the third item's accordion body.</strong> It is hidden
         by default, until the collapse plugin adds the appropriate classes that we
         use to style each element. These classes control the overall appearance, as
         well as the showing and hiding via CSS transitions. You can modify any of this with
         custom CSS or overriding our default variables. It's also worth noting that
         just about  any HTML can go within the <code>.accordion-body</code>, though the
         transition  does limit overflow.
         </Accordion.Body>
      </Accordion.Item>
      </Accordion>`,h=`
import SpkAccordions from "@/shared/@spk-reusable-components/reusable-advancedui/spk-accordions";

<SpkAccordions items={Basicdata} accordionClass="accordion-primary" defaultActiveKey="1" />`,m=`
<Accordion defaultActiveKey="0" className="accordion accordion-secondary">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body> <strong>This is the first item's accordion body.</strong> It is shown by
           default, until the collapse plugin adds the appropriate classes that we
           use to style each element. These classes control the overall appearance, as
           well as the showing and hiding via CSS transitions. You can modify any of this with
           custom CSS or overriding our default variables. It's also worth noting that
           just  about any HTML can go within the <code>.accordion-body</code>, though the
           transition does limit overflow.
      </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body><strong>This is the second item's accordion body.</strong> It is hidden
         by default, until the collapse plugin adds the appropriate classes that we
         use to style each element. These classes control the overall appearance, as
         well as the showing and hiding via CSS transitions. You can modify any of this with
         custom CSS or overriding our default variables. It's also worth noting that
         just about any HTML can go within the <code>.accordion-body</code>, though the
         transition does limit overflow.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Accordion Item #3</Accordion.Header>
         <Accordion.Body><strong>This is the third item's accordion body.</strong> It is hidden
          by default, until the collapse plugin adds the appropriate classes that we
          use to style each element. These classes control the overall appearance, as
          well as the showing and hiding via CSS transitions. You can modify any of this with
          custom CSS or overriding our default variables. It's also worth noting that
          just about  any HTML can go within the <code>.accordion-body</code>, though the
          transition  does limit overflow.
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>`,u=`
import SpkAccordions from "@/shared/@spk-reusable-components/reusable-advancedui/spk-accordions";

<SpkAccordions items={Basicdata} accordionClass="accordion-secondary" defaultActiveKey="1" />`,p=`
<Accordion defaultActiveKey="0" 
      className="accordion accordion-customicon1 accordions-items-seperate">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body> <strong>This is the first item's accordion body.</strong> It is shown by
           default, until the collapse plugin adds the appropriate classes that we
           use to style each element. These classes control the overall appearance, as
           well as the showing and hiding via CSS transitions. You can modify any of this with
           custom CSS or overriding our default variables. It's also worth noting that
           just  about any HTML can go within the <code>.accordion-body</code>, though the
           transition does limit overflow.
      </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body><strong>This is the second item's accordion body.</strong> It is hidden
         by default, until the collapse plugin adds the appropriate classes that we
         use to style each element. These classes control the overall appearance, as
         well as the showing and hiding via CSS transitions. You can modify any of this with
         custom CSS or overriding our default variables. It's also worth noting that
         just about any HTML can go within the <code>.accordion-body</code>, though the
         transition does limit overflow.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Accordion Item #3</Accordion.Header>
         <Accordion.Body><strong>This is the third item's accordion body.</strong> It is hidden
          by default, until the collapse plugin adds the appropriate classes that we
          use to style each element. These classes control the overall appearance, as
          well as the showing and hiding via CSS transitions. You can modify any of this with
          custom CSS or overriding our default variables. It's also worth noting that
          just about  any HTML can go within the <code>.accordion-body</code>, though the
          transition  does limit overflow.
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>`,b=`
import SpkAccordions from "@/shared/@spk-reusable-components/reusable-advancedui/spk-accordions";

<SpkAccordions items={Basicdata} accordionClass="accordion-customicon1 accordions-items-seperate" defaultActiveKey="1" />
`,y=`
<Accordion defaultActiveKey="0" className="accordion customized-accordion accordions-items-seperate">
      <Accordion.Item eventKey="0" className="custom-accordion-primary">
      <Accordion.Header>Accordion Item #1</Accordion.Header>
      <Accordion.Body> <strong>This is the first item's accordion body.</strong> It is shown by
         default, until the collapse plugin adds the appropriate classes that we
         use to style each element. These classes control the overall appearance, as
         well as the showing and hiding via CSS transitions. You can modify any of this with
         custom CSS or overriding our default variables. It's also worth noting that
         just  about any HTML can go within the <code>.accordion-body</code>, though the
         transition does limit overflow.
      </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" className="accordion-item custom-accordion-secondary">
      <Accordion.Header>Accordion Item #2</Accordion.Header>
       <Accordion.Body><strong>This is the second item's accordion body.</strong> It is hidden
      by default, until the collapse plugin adds the appropriate classes that we
      use to style each element. These classes control the overall appearance, as
      well as the showing and hiding via CSS transitions. You can modify any of this with
      custom CSS or overriding our default variables. It's also worth noting that
      just about any HTML can go within the <code>.accordion-body</code>, though the
      transition does limit overflow.
      </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" className="accordion-item custom-accordion-danger">
      <Accordion.Header>Accordion Item #3</Accordion.Header>
      <Accordion.Body><strong>This is the third item's accordion body.</strong> It is hidden
       by default, until the collapse plugin adds the appropriate classes that we
       use to style each element. These classes control the overall appearance, as
       well as the showing and hiding via CSS transitions. You can modify any of this with
       custom CSS or overriding our default variables. It's also worth noting that
       just about  any HTML can go within the <code>.accordion-body</code>, though the
       transition  does limit overflow.
      </Accordion.Body>
      </Accordion.Item>
      </Accordion>`,f=`
import SpkAccordions from "@/shared/@spk-reusable-components/reusable-advancedui/spk-accordions";

<SpkAccordions items={Customdata} accordionClass="customized-accordion accordions-items-seperate" defaultActiveKey="1" />`,g=`
<Accordion defaultActiveKey="0" className="accordion accordion-border-primary accordions-items-seperate">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body> <strong>This is the first item's accordion body.</strong> It is shown by
           default, until the collapse plugin adds the appropriate classes that we
           use to style each element. These classes control the overall appearance, as
           well as the showing and hiding via CSS transitions. You can modify any of this with
           custom CSS or overriding our default variables. It's also worth noting that
           just  about any HTML can go within the <code>.accordion-body</code>, though the
           transition does limit overflow.
      </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body><strong>This is the second item's accordion body.</strong> It is hidden
         by default, until the collapse plugin adds the appropriate classes that we
         use to style each element. These classes control the overall appearance, as
         well as the showing and hiding via CSS transitions. You can modify any of this with
         custom CSS or overriding our default variables. It's also worth noting that
         just about any HTML can go within the <code>.accordion-body</code>, though the
         transition does limit overflow.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Accordion Item #3</Accordion.Header>
         <Accordion.Body><strong>This is the third item's accordion body.</strong> It is hidden
          by default, until the collapse plugin adds the appropriate classes that we
          use to style each element. These classes control the overall appearance, as
          well as the showing and hiding via CSS transitions. You can modify any of this with
          custom CSS or overriding our default variables. It's also worth noting that
          just about  any HTML can go within the <code>.accordion-body</code>, though the
          transition  does limit overflow.
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>`,v=`
import SpkAccordions from "@/shared/@spk-reusable-components/reusable-advancedui/spk-accordions";

<SpkAccordions items={Basicdata} accordionClass="accordion-border-primary accordions-items-seperate" defaultActiveKey="1" />`,w=`
<Accordion defaultActiveKey="0" className="accordion accordion-border-success accordions-items-seperate">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body> <strong>This is the first item's accordion body.</strong> It is shown by
           default, until the collapse plugin adds the appropriate classes that we
           use to style each element. These classes control the overall appearance, as
           well as the showing and hiding via CSS transitions. You can modify any of this with
           custom CSS or overriding our default variables. It's also worth noting that
           just  about any HTML can go within the <code>.accordion-body</code>, though the
           transition does limit overflow.
      </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body><strong>This is the second item's accordion body.</strong> It is hidden
         by default, until the collapse plugin adds the appropriate classes that we
         use to style each element. These classes control the overall appearance, as
         well as the showing and hiding via CSS transitions. You can modify any of this with
         custom CSS or overriding our default variables. It's also worth noting that
         just about any HTML can go within the <code>.accordion-body</code>, though the
         transition does limit overflow.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Accordion Item #3</Accordion.Header>
         <Accordion.Body><strong>This is the third item's accordion body.</strong> It is hidden
          by default, until the collapse plugin adds the appropriate classes that we
          use to style each element. These classes control the overall appearance, as
          well as the showing and hiding via CSS transitions. You can modify any of this with
          custom CSS or overriding our default variables. It's also worth noting that
          just about  any HTML can go within the <code>.accordion-body</code>, though the
          transition  does limit overflow.
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>`,S=`
import SpkAccordions from "@/shared/@spk-reusable-components/reusable-advancedui/spk-accordions";

 <SpkAccordions items={Basicdata} accordionClass="accordion-border-success accordions-items-seperate" defaultActiveKey="1" />`,C=`
<Accordion defaultActiveKey="0" className="accordion accordionicon-left accordions-items-seperate">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body> <strong>This is the first item's accordion body.</strong> It is shown by
           default, until the collapse plugin adds the appropriate classes that we
           use to style each element. These classes control the overall appearance, as
           well as the showing and hiding via CSS transitions. You can modify any of this with
           custom CSS or overriding our default variables. It's also worth noting that
           just  about any HTML can go within the <code>.accordion-body</code>, though the
           transition does limit overflow.
      </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body><strong>This is the second item's accordion body.</strong> It is hidden
         by default, until the collapse plugin adds the appropriate classes that we
         use to style each element. These classes control the overall appearance, as
         well as the showing and hiding via CSS transitions. You can modify any of this with
         custom CSS or overriding our default variables. It's also worth noting that
         just about any HTML can go within the <code>.accordion-body</code>, though the
         transition does limit overflow.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Accordion Item #3</Accordion.Header>
         <Accordion.Body><strong>This is the third item's accordion body.</strong> It is hidden
          by default, until the collapse plugin adds the appropriate classes that we
          use to style each element. These classes control the overall appearance, as
          well as the showing and hiding via CSS transitions. You can modify any of this with
          custom CSS or overriding our default variables. It's also worth noting that
          just about  any HTML can go within the <code>.accordion-body</code>, though the
          transition  does limit overflow.
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>`,A=`
import SpkAccordions from "@/shared/@spk-reusable-components/reusable-advancedui/spk-accordions";

<SpkAccordions items={Basicdata} accordionClass="accordionicon-left accordions-items-seperate" defaultActiveKey="1" />
`,k=`
<Accordion defaultActiveKey="0" 
      className="accordion accordionicon-none accordions-items-seperate">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body> <strong>This is the first item's accordion body.</strong> It is shown by
           default, until the collapse plugin adds the appropriate classes that we
           use to style each element. These classes control the overall appearance, as
           well as the showing and hiding via CSS transitions. You can modify any of this with
           custom CSS or overriding our default variables. It's also worth noting that
           just  about any HTML can go within the <code>.accordion-body</code>, though the
           transition does limit overflow.
      </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body><strong>This is the second item's accordion body.</strong> It is hidden
         by default, until the collapse plugin adds the appropriate classes that we
         use to style each element. These classes control the overall appearance, as
         well as the showing and hiding via CSS transitions. You can modify any of this with
         custom CSS or overriding our default variables. It's also worth noting that
         just about any HTML can go within the <code>.accordion-body</code>, though the
         transition does limit overflow.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Accordion Item #3</Accordion.Header>
         <Accordion.Body><strong>This is the third item's accordion body.</strong> It is hidden
          by default, until the collapse plugin adds the appropriate classes that we
          use to style each element. These classes control the overall appearance, as
          well as the showing and hiding via CSS transitions. You can modify any of this with
          custom CSS or overriding our default variables. It's also worth noting that
          just about  any HTML can go within the <code>.accordion-body</code>, though the
          transition  does limit overflow.
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>`,I=`
import SpkAccordions from "@/shared/@spk-reusable-components/reusable-advancedui/spk-accordions";

<SpkAccordions items={Basicdata} accordionClass="accordionicon-none accordions-items-seperate" defaultActiveKey="1" />
`,B=`
<p className="mb-0">
      <SpkButton className="btn btn-primary mb-2 me-1"  onClick={() => { first() }}>Toggle first element</SpkButton>
      <SpkButton variant='' className="btn btn-success mb-2 me-1" type="button" onClick={() => { second() }}>Toggle second element</SpkButton>
      <SpkButton variant='' className="btn btn-danger mb-2" type="button"  onClick={() => { both() }}>Toggle both elements</SpkButton>
                                      </p>
      <Row>
          <div className="col m-1">
      {isFirstCollapsed ? (
              <div className=" multi-collapse" id="multiCollapseExample1">
                  <div className="card card-body mb-0">
                      Some placeholder content for the first collapse
                      component of
                      this multi-collapse example. This panel is hidden by
                      default
                      but revealed when the user activates the relevant
                      trigger.
                  </div>
              </div>
          ) : null}
          </div>
          <div className="col m-1">
          {isSecondCollapsed ? (
              <div className=" multi-collapse" id="multiCollapseExample2">
                  <div className="card card-body mb-0">
                      Some placeholder content for the second collapse
                      component
                      of this multi-collapse example. This panel is hidden by
                      default but revealed when the user activates the
                      relevant
                      trigger.
                  </div>
              </div>
           ) : null}
          </div>
      </Row>`,N=`
<p><SpkButton onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}>
      Toggle width collapse</SpkButton>                   
      </p><div style={{ minHeight: '120px' }}>
      <Collapse in={open} dimension="width">
      <div id="example-collapse-text">
          <Card body style={{ width: '230px' }}>This is some placeholder content for a horizontal collapse. It's
           hidden by default and shown when triggered.
          </Card>
      </div>
      </Collapse>
      </div>`,M=`
<Carousel id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" indicators={false}>
<Carousel.Item className="active">
  <img src={media26} className="d-block w-100" alt="..." />
</Carousel.Item>
<Carousel.Item>
  <img src={media27}
  className="d-block w-100" alt="..." />
 </Carousel.Item>
<Carousel.Item>
  <img src={media33}
  className="d-block w-100" alt="..." />
</Carousel.Item>
</Carousel>`,H=`//<!-- Prism Code: This code is only used for showcode purpose -->//
export const Slidecarousel = [
    <div className="custom-cardwithimage">
        <img src={media26} className="d-block w-100" alt="..." />
    </div>,
    <div className="custom-cardwithimage">
        <img src={media27} className="d-block w-100" alt="..." />
    </div>,
    <div className="custom-cardwithimage">
        <img src={media33} className="d-block w-100" alt="..." />
    </div>
]
// End Prism Code//;`,T=`
import SpkCarouselComponent from "@/shared/@spk-reusable-components/reusable-advancedui/spk-carousel";
<SpkCarouselComponent items={Carouseldata} />`,x=`
<Carousel id="carouselExampleIndicators" 
      className="carousel slide" data-bs-ride="carousel">
      <Carousel.Item className="active">
      <img src={media28}
      className="d-block w-100" alt="..." />
      </Carousel.Item>
      <Carousel.Item>
      <img src={media31} 
      className="d-block w-100" alt="..." />
      </Carousel.Item>
      <Carousel.Item>
      <img src={media21}
      className="d-block w-100" alt="..." />
      </Carousel.Item>
      </Carousel>
`,L=`//<!-- Prism Code: This code is only used for showcode purpose -->//
export const Carouseldata = [
    <div className="custom-cardwithimage">
        <img src={media28} className="d-block w-100" alt="..." />
    </div>,
    <div className="custom-cardwithimage">
        <img src={media31} className="d-block w-100" alt="..." />
    </div>,
    <div className="custom-cardwithimage">
        <img src={media21} className="d-block w-100" alt="..." />
    </div>
];
// End Prism Code//;
  `,K=`
import SpkCarouselComponent from "@/shared/@spk-reusable-components/reusable-advancedui/spk-carousel";

<SpkCarouselComponent items={Indicatorcarousel} mainClass="carousel slide" indicators={true} />`,O=`
<Carousel id="carouselExampleSlidesOnly" 
      className="carousel slide carousel-icons" indicators={false}>
      <Carousel.Item className="active">
          <img  src={media25}
           className="d-block w-100" alt="..." />
      </Carousel.Item>
      <Carousel.Item>
          <img src={media21} 
           className="d-block w-100" alt="..." />
      </Carousel.Item>
      <Carousel.Item>
          <img src={media30}
          className="d-block w-100" alt="..." />
      </Carousel.Item>
      </Carousel>
      `,F=`//<!-- Prism Code: This code is only used for showcode purpose -->//
export const Indicatorcarousel = [
    <div className="custom-cardwithimage">
        <img src={media25} className="d-block w-100" alt="..." />
    </div>,
    <div className="custom-cardwithimage">
        <img src={media21} className="d-block w-100" alt="..." />
    </div>,
    <div className="custom-cardwithimage">
        <img src={media30} className="d-block w-100" alt="..." />
    </div>
]
// End Prism Code//;
`,j=`
import SpkCarouselComponent from "@/shared/@spk-reusable-components/reusable-advancedui/spk-carousel";

<SpkCarouselComponent items={Slidecarousel} />`,Y=`
<Carousel id="carouselExampleCaptions" 
      className="carousel slide" data-bs-ride="carousel">
      <Carousel.Item className="active">
      <img src={media59}
      className="d-block w-100" alt="..." />
      <Carousel.Caption className="d-none d-md-block">
      <h5 className='text-fixed-white'>First slide label</h5>
      <p>Some representative placeholder content for the first slide.</p>
      </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img  src={media60} 
      className="d-block w-100" alt="..." />
      <Carousel.Caption className="d-none d-md-block">
      <h5 className='text-fixed-white'>Second slide label</h5>
      <p>Some representative placeholder content for the second slide.</p>
      </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img  src={media61} 
      className="d-block w-100" alt="..." />
      <Carousel.Caption className="d-none d-md-block">
      <h5 className='text-fixed-white'>Third slide label</h5>
      <p>Some representative placeholder content for the third slide.</p>
      </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
      `,q=`//<!-- Prism Code: This code is only used for showcode purpose -->//
export const Captioncarousel = [
    <div className="custom-cardwithimage">
        <img src={media59} className="d-block w-100" alt="..." />
        <div className="carousel-caption d-none d-md-block">
            <h5 className='text-fixed-white'>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
        </div>
    </div>,
    <div className="custom-cardwithimage">
        <img src={media60} className="d-block w-100" alt="..." />
        <div className="carousel-caption d-none d-md-block">
            <h5 className='text-fixed-white'>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
        </div>
    </div>,
    <div className="custom-cardwithimage">
        <img src={media61} className="d-block w-100" alt="..." />
        <div className="carousel-caption d-none d-md-block">
            <h5 className='text-fixed-white'>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
        </div>
    </div>
]
// End Prism Code//;
`,E=`
import SpkCarouselComponent from "@/shared/@spk-reusable-components/reusable-advancedui/spk-carousel";

<SpkCarouselComponent items={Captioncarousel} mainClass="carousel slide" indicators={true} />`,P=`
Carousel fade id="carouselExampleFade" 
      className="carousel slide carousel-fade" indicators={false}>
      <Carousel.Item className="active">
         <img src={media40}
         className="d-block w-100" alt="..." />
      </Carousel.Item>
      <Carousel.Item>
         <img src={media41} 
         className="d-block w-100" alt="..." />
      </Carousel.Item>
      <Carousel.Item>
         <img src={media42}
         className="d-block w-100" alt="..." />
      </Carousel.Item>
      </Carousel>
`,D=`//<!-- Prism Code: This code is only used for showcode purpose -->//
export const Individualcarousel = [
    <div className="custom-cardwithimage">
        <img src={media40} className="d-block w-100" alt="..." />
    </div>,
    <div className="custom-cardwithimage">
        <img src={media41} className="d-block w-100" alt="..." />
    </div>,
    <div className="custom-cardwithimage">
        <img src={media42} className="d-block w-100" alt="..." />
    </div>
]
// End Prism Code//;`,R=`
import SpkCarouselComponent from "@/shared/@spk-reusable-components/reusable-advancedui/spk-carousel";

<SpkCarouselComponent items={Crosscarousel} fade={true} mainClass="carousel slide carousel-fade" indicators={false} />`,z=`
<Carousel id="carouselExampleInterval" 
      className="carousel slide" data-bs-ride="carousel" indicators={false}>
      <Carousel.Item interval={1000} className="active" >
          <img src={media43}
          className="d-block w-100" alt="..." />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
          <img src={media44}
          className="d-block w-100" alt="..." />
      </Carousel.Item>
      <Carousel.Item >
          <img src={media45}
          className="d-block w-100" alt="..." />
      </Carousel.Item>
      </Carousel>
`,G=`//<!-- Prism Code: This code is only used for showcode purpose -->//
export const Crosscarousel = [
    <div className="custom-cardwithimage">
        <img src={media43} className="d-block w-100" alt="..." />
    </div>,
    <div className="custom-cardwithimage">
        <img src={media44} className="d-block w-100" alt="..." />
    </div>,
    <div className="custom-cardwithimage">
        <img src={media45} className="d-block w-100" alt="..." />
    </div>
]
// End Prism Code//;`,V=`
import SpkCarouselComponent from "@/shared/@spk-reusable-components/reusable-advancedui/spk-carousel";

<SpkCarouselComponent interval1={1000} items={Individualcarousel} mainClass="carousel slide" indicators={false} />`,U=`
<Carousel touch={false} id="carouselExampleControlsNoTouching" 
      className="carousel slide" data-bs-touch="false" indicators={false}
      data-bs-interval="false">
      <Carousel.Item className="carousel-item active">
          <img src={media13}
          className="d-block w-100" alt="..." />
      </Carousel.Item>
      <Carousel.Item>
          <img src={media14} 
          className="d-block w-100" alt="..." />
      </Carousel.Item>
      <Carousel.Item>
          <img src={media18}
          className="d-block w-100" alt="..." />
      </Carousel.Item>
      </Carousel>
`,W=`//<!-- Prism Code: This code is only used for showcode purpose -->//
export const Disablecarousel = [
    <div className="custom-cardwithimage">
        <img src={media13} className="d-block w-100" alt="..." />
    </div>,
    <div className="custom-cardwithimage">
        <img src={media14} className="d-block w-100" alt="..." />
    </div>,
    <div className="custom-cardwithimage">
        <img src={media18}src={media18} className="d-block w-100" alt="..." />
    </div>
]
// End Prism Code//;
`,X=`
import SpkCarouselComponent from "@/shared/@spk-reusable-components/reusable-advancedui/spk-carousel";

<SpkCarouselComponent items={Disablecarousel} mainClass="carousel slide" indicators={false}
data-bs-interval="false"/>`,Q=`
<Carousel id="carouselExampleDark"
      className="carousel slide">
      <Carousel.Item className="active" data-bs-interval="10000">
      <img src={media63}
      className="d-block w-100"
      alt="..." />
      <Carousel.Caption className="d-none d-md-block">
      <h5 className='text-fixed-white'>First slide label</h5>
      <p className="op-7">Some representative placeholder 
      content for the first slide.</p>
      </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item data-bs-interval="2000">
      <img src={media64}
      className="d-block w-100"
      alt="..." />
      <Carousel.Caption className="d-none d-md-block">
      <h5 className='text-fixed-white'>Second slide label</h5>
      <p className="op-7">Some representative placeholder 
      content for the second slide.</p>
      </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={media62
      className="d-block w-100"
      alt="..." />
      <Carousel.Caption className="d-none d-md-block">
      <h5 className='text-fixed-white'>Third slide label</h5>
      <p className="op-7">Some representative placeholder
      content for the third slide.</p>
      </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
      `,Z=`//<!-- Prism Code: This code is only used for showcode purpose -->//
export const Darkcarousel = [
    <div className="custom-cardwithimage" data-bs-interval="10000">
        <img src={media63} className="d-block w-100"
            alt="..." />
        <div className="carousel-caption d-none d-md-block">
            <h5 className='text-fixed-white'>First slide label</h5>
            <p className="op-7">Some representative placeholder content for the first slide.</p>
        </div>
    </div>,
    <div className="custom-cardwithimage" data-bs-interval="2000">
        <img src={media64} className="d-block w-100"
            alt="..." />
        <div className="carousel-caption d-none d-md-block">
            <h5 className='text-fixed-white'>Second slide label</h5>
            <p className="op-7">Some representative placeholder content for the second slide.</p>
        </div>
    </div>,
    <div className="custom-cardwithimage">
        <img src={media62} className="d-block w-100"
            alt="..." />
        <div className="carousel-caption d-none d-md-block">
            <h5 className='text-fixed-white'>Third slide label</h5>
            <p className="op-7">Some representative placeholder content for the third slide.</p>
        </div>
    </div>
]
// End Prism Code//;`,J=`
import SpkCarouselComponent from "@/shared/@spk-reusable-components/reusable-advancedui/spk-carousel";

<SpkCarouselComponent items={Darkcarousel} mainClass="carousel slide" indicators={true} />`,_=`
export default function BasicModal () {   
          const [show, setShow] = useState(false);
      
          const handleClose = () => setShow(false);
          const handleShow = () => setShow(true);
          return(
      <SpkButton variant="primary" onClick={handleShow}>
       Launch demo modal</SpkButton>
      <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
          <Modal.Title as="h6">Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>...</Modal.Body>
          <Modal.Footer>
          <SpkButton variant="secondary" onClick={handleClose}>
              Close
          </SpkButton>
          <SpkButton variant="primary" onClick={handleClose}>
              Save Changes
          </SpkButton>
          </Modal.Footer>
      </Modal>
      )}`,$=`
export default function BasicModal () {   
          const [modals, setModals] = useState<{ [key: string]: boolean }>({});
              const handleModalOpen = (modalName: string) => {
                  setModals((prevModals) => ({ ...prevModals, [modalName]: true }));
              };
          return(
          <SpkButton variant="primary" onClick={handleShow}>
           Launch static backdrop modal</SpkButton>
          <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
              <Modal.Header closeButton>
              <Modal.Title as="h6">Modal title</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              I will not close if you click outside me. Don not even try to press
              escape key.
              </Modal.Body>
              <Modal.Footer>
              <SpkButton variant="secondary" onClick={handleClose}>
                  Close
              </SpkButton>
              <SpkButton variant="primary">Understood</SpkButton>
              </Modal.Footer>
          </Modal>
          )}`,oo=`
export default function BasicModal () {   
          const [modals, setModals] = useState<{ [key: string]: boolean }>({});
              const handleModalOpen = (modalName: string) => {
                  setModals((prevModals) => ({ ...prevModals, [modalName]: true }));
              };
          return(
              <SpkButton variant='primary' type="button" className="btn btn-primary" onClick={handleShow}>
              Scrolling long content
              </SpkButton>
              <Modal show={show} onHide={handleClose2} backdrop="static" keyboard={false}>
                  <Modal.Header closeButton>
                  <Modal.Title as="h6">Modal title</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                  Libero
                                  ipsum quasi, error quibusdam debitis maiores hic eum? Vitae
                                  nisi
                                  ipsa maiores fugiat deleniti quis reiciendis veritatis.</p>
                              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
                                  voluptatibus, ipsam quo est rerum modi quos expedita facere,
                                  ex
                                  tempore fuga similique ipsa blanditiis et accusamus
                                  temporibus
                                  commodi voluptas! Nobis veniam illo architecto expedita quam
                                  ratione quaerat omnis. In, recusandae eos! Pariatur,
                                  deleniti
                                  quis ad nemo ipsam officia temporibus, doloribus fuga
                                  asperiores
                                  ratione distinctio velit alias hic modi praesentium aperiam
                                  officiis eaque, accusamus aut. Accusantium assumenda,
                                  commodi
                                  nulla provident asperiores fugit inventore iste amet aut
                                  placeat
                                  consequatur reprehenderit. Ratione tenetur eligendi, quis
                                  aperiam dolores magni iusto distinctio voluptatibus minus a
                                  unde
                                  at! Consequatur voluptatum in eaque obcaecati, impedit
                                  accusantium ea soluta, excepturi, quasi quia commodi
                                  blanditiis?
                                  Qui blanditiis iusto corrupti necessitatibus dolorem fugiat
                                  consequuntur quod quo veniam? Labore dignissimos reiciendis
                                  accusamus recusandae est consequuntur iure.</p>
                              <br/>
                              <br/>
                              <br/>
                              <br/>
                              <br/>
                              <br/>
                              <br/>
                              <br/>
                              <br/>
                              <br/>
                              <br/>
                              <br/>
                              <br/>
                              <br/>
                              <br/>
                              <br/>
                              <br/>
                              <br/>
                              <br/>
                              <br/>
                              <br/>
                              <br/>
                              <br/>
                              <br/>
                              <br/>
                              <br/>
                              <p>Lorem ipsum dolor sit amet.</p>
                  </Modal.Body>
                  <Modal.Footer>
                  <SpkButton variant="secondary" onClick={handleClose2}>
                      Close
                  </SpkButton>
                  <SpkButton variant="primary">Understood</SpkButton>
                  </Modal.Footer>
              </Modal>
          )}`,eo=`
export default function BasicModal () {   
          const [modalShow, setModalShow] = useState(false);
          return(
          <SpkButton type="button" className="btn btn-primary" 
          onClick={() => setModalShow(true)}">
              Vertically centered modal
          </SpkButton>
          <Modal centered show={modalShow} onHide={() => setModalShow(false)} 
          keyboard={false} className="modal fade">
          <Modal.Header closeButton>
          <Modal.Title as="h6">Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
           Libero ipsum quasi, error quibusdam debitis maiores hic eum? Vitae
           nisi ipsa maiores fugiat deleniti quis reiciendis veritatis.</p>
          </Modal.Body>
          <Modal.Footer>
          <SpkButton variant="secondary" onClick={() => setModalShow(false)}>
              Close
          </SpkButton>
          <SpkButton variant="primary">Understood</SpkButton>
          </Modal.Footer>
          </Modal>
          )}`,ao=`
export default function BasicModal () {   
          const [show, setShow] = useState(false);
          const handleClose3 = () => setShow(false);
          const handleShow = () => setShow(true);
          return(
          <SpkButton variant='primary' type="button" className="" onClick={handleShow}>
          Launch demo modal</SpkButton>
          <Modal show={show} onHide={handleClose3} centered className='popover-modal'>
          <Modal.Header closeButton>
          <Modal.Title as="h6"> Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body> <h5>Popover in a modal</h5>
          <p> This
              <SpkTooltips trigger="click"
              placement='right'
              // autoclose='true'
              overlay={
                  <Popover placement='bottom'>
                  <Popover.Header> Popover bottom</Popover.Header>
                  <Popover.Body>
                      Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
                  </Popover.Body>
                  </Popover>
              }>
              <SpkButton variant="secondary" className="me-2 ms-2">button</SpkButton>
              </SpkTooltips>
              triggers a popover on click.
          </p>
          </Modal.Body>
          <Modal.Footer>
          <SpkButton variant="secondary" onClick={handleClose3}>
              Close
          </SpkButton>
          <SpkButton variant="primary">
              Save Changes
          </SpkButton>
          </Modal.Footer>
          </Modal>
          )}`,to=`
export default function BasicModal () {   
          const [modalShow, setModalShow] = useState(false)
          return(
          <SpkButton variant='primary' type="button" className="" onClick={handleShow}>
          Launch demo modal</SpkButton>
          <Modal show={modalShow} onHide={() => setModalShow(false)} centered>
           <Modal.Header closeButton>
           <Modal.Title as="h6"> Modal title</Modal.Title>
           </Modal.Header>
           <Modal.Body> 
               <Container fluid>
          <Row>
              <Col md={4} className=" bg-light border">.col-md-4</Col>
              <Col md={4} className=" ms-auto bg-light border">.col-md-4
                  .ms-auto</Col>
          </Row>
          <Row className="row mt-3">
              <Col md={3} className=" ms-auto bg-light border">.col-md-3
                  .ms-auto</Col>
              <Col md={2} className=" ms-auto bg-light border">.col-md-2
                  .ms-auto</Col>
          </Row>
          <Row className="row mt-3">
              <Col md={6} className=" ms-auto bg-light border">.col-md-6
                  .ms-auto</Col>
          </Row>
          <Row className="row mt-3">
              <Col sm={9} className=" bg-light border">
                  Level 1: .col-sm-9
                  <Row>
          <Col sm={6} className="col-8 bg-light border">
                  Level 2: .col-8 .col-sm-6
          </Col>
          <Col sm={6} className="col-4 bg-light border">
               Level 2: .col-4 .col-sm-6
                                   </Col>
                               </Row>
                           </Col>
                       </Row>
                   </Container>
           </Modal.Body>
           <Modal.Footer>
           <SpkButton variant="secondary" onClick={() => setModalShow(false)}>
               Close
           </SpkButton>
           <SpkButton variant="primary">
               Save Changes
           </SpkButton>
           </Modal.Footer>
          </Modal>
          )}`,so=`
export default function BasicModal () {   
          const [show, setShow] = useState(false);
          const handleClose3 = () => setShow(false);
          const handleShow = () => setShow(true);  //  Twomodals
          const [showt1, setShowt1] = useState(false)
          const [showt2, setShowt2] = useState(false)
          const handleCloset1 = () => setShowt1(false)
          const handleShowt1 = () => setShowt1(true)
          const handleCloset2 = () => setShowt2(false)
          const handleShowt2 = () => setShowt2(true)
          
          const Handleclose1 = () => {
            setShowt1(false)
            setShowt2(true)
          }
          const Handleclose2 = () => {
            setShowt2(false)
            setShowt1(true)
          }
          return(
              <SpkButton variant="outline-primary" data-bs-toggle="modal"  onClick={handleShowt1}
              >Open first modal
              </SpkButton>
              <Modal id="m1" className="fade" aria-hidden="true"
                  aria-labelledby="contained-modal-title-vcenter" centered show={showt1} onHide={handleCloset1}>
                  <Modal.Header closeButton>
                      <h6 className="modal-title" id="exampleModalToggleLabel">Modal 1
                      </h6>
                  </Modal.Header>
                  <Modal.Body>
                                      Show a second modal and hide this one with the button below.
                  </Modal.Body>
                  <Modal.Footer>
                      <SpkButton variant='' className="btn btn-outline-primary" onClick={Handleclose1}
                          data-bs-target="#exampleModalToggle2"
                          data-bs-toggle="modal">Open second modal</SpkButton>
                  </Modal.Footer>
              </Modal>
              <Modal id="m2" className='fade' aria-labelledby="contained-modal-title-vcenter"
                  centered show={showt2} onHide={handleCloset2}>
                  <Modal.Header>
                      <h6 className="modal-title" id="exampleModalToggleLabel2">Modal 2
                      </h6>
                      <SpkButton variant='' type="button" className="btn-close" data-bs-dismiss="modal"
                          aria-label="Close"></SpkButton>
                  </Modal.Header>
                  <Modal.Body>
                                      Hide this modal and show the first with the button below.
                  </Modal.Body>
                  <Modal.Footer>
                      <SpkButton variant='' className="btn btn-outline-primary" data-bs-target="#exampleModalToggle" onClick={Handleclose2}
                          data-bs-toggle="modal">Back to first</SpkButton>
                  </Modal.Footer>
              </Modal>
          )}`,io=`
export default function BasicModal () {   
          // small modal
          const [smShow, setSmShow] = useState(false);
          
          //large modal
          const [lgShow, setLgShow] = useState(false);
          
          //large modal
          const [xlShow, setXlShow] = useState(false);
          return(
              <Modal size="xl" show={xlShow} onHide={() => setXlShow(false)}
              aria-labelledby="example-modal-sizes-title-sm">
              <Modal.Header closeButton>
              <Modal.Title as="h6" id="example-modal-sizes-title-sm">
                  Extra large Modal
              </Modal.Title>
              </Modal.Header>
              <Modal.Body>...</Modal.Body>
          </Modal>
          <Modal size="lg" show={lgShow} onHide={() => 
          setLgShow(false)}aria-labelledby="example-modal-sizes-title-lg">
              <Modal.Header closeButton>
              <Modal.Title as="h6" id="example-modal-sizes-title-lg">
                  Large Modal
              </Modal.Title>
              </Modal.Header>
              <Modal.Body>...</Modal.Body>
          </Modal>
          <Modal size="sm" show={smShow} onHide={() => setSmShow(false)}
              aria-labelledby="example-modal-sizes-title-sm">
              <Modal.Header closeButton>
              <Modal.Title as="h6" id="example-modal-sizes-title-sm">
                  Small Modal
              </Modal.Title>
              </Modal.Header>
              <Modal.Body>...</Modal.Body>
          </Modal>
          )}`,co=`
export default function BasicModal () {   
          const [show, setShow] = useState(false);
          
          const handleClose6 = () => setShow(false);
          const handleShow = () => setShow(true);
          return(
          <SpkButton variant='light' type="button" 
          className="btn btn-light mb-1" onClick={handleShow}>Open modal for
          @getbootstrap</SpkButton>
          <Modal show={show} onHide={handleClose6}>
                  <Modal.Header closeButton>
                  <Modal.Title as="h6>Modal heading</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                  <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Recipient:</Form.Label>
          <Form.Control
              type="email"
              placeholder=" @getbootstrap"
              autoFocus
          />
          </Form.Group>
          <Form.Group
          className="mb-3"
          controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message:</Form.Label>
          <Form.Control as="textarea" rows={3} />
          </Form.Group>
          </Form>
          </Modal.Body>
          <Modal.Footer>
          <SpkButton variant="secondary" onClick={handleClose6}>
              Close
          </SpkButton>
          <SpkButton variant="primary">Send message</SpkButton>
          </Modal.Footer>
          </Modal>
          )}`,no=`
<SpkButton variant='' type="button" className="btn-close"
      disabled aria-label="Close"></SpkButton>`,lo=`
<CloseButton type="button" className="btn-close btn-close-white" aria-label="Close"></CloseButton>
      <CloseButton type="button" className="btn-close btn-close-white" disabled
      aria-label="Close"></CloseButton>`,ro=`
export const Modal = ()= {
        const [animation1, setanimation1] = useState(false);
      
        let viewDemo = (modal) => {
          switch (modal) {
            case "Basic":
              setanimation1(true)
              break;
          }
        let viewDemoClose1 = (modal) => {
            switch (modal) {
              case "Basic":
                setanimation1(false)
                break;
        return(
          <Col sm={6} md={4} xl={3} className="col-sm-6 col-md-4 col-xl-3">
          <Link to="#!" className="modal-effect btn btn-primary btn-block"  onClick={() => viewDemoShow("Basic")}>Zoom</Link>
          <Rodal onClose={hide} visible={animation1} animation='Scale' height={280} onClick={() => viewDemoClose1("Basic")} >
            <div className='modal-header'>Modal Header
              <Link to='#'><span className="d-flex ms-auto text-dark" onClick={() => { viewDemoClose1("Basic") }}><i className='fe fe-x ms-auto'></i></span></Link>
            </div>
            <div className='modal-body'>
              <h6>Modal Body</h6>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</div>
            <div className='modal-footer'>
              <SpkButton className="me-2" variant="primary" onClick={() => viewDemoClose1("Basic")}>Save Changes</SpkButton>
              <SpkButton variant="secondary" onClick={() => viewDemoClose1("Basic")}>Close</SpkButton>
            </div>
          </Rodal>
        </Col>
         )
        };`,ho=`
<p className="placeholder-glow mb-0">
      <span className="placeholder col-12"></span>
       </p>
      <p className="placeholder-wave mb-0">
      <span className="placeholder col-12"></span>
       </p>`,mo=`
<span className="placeholder col-12 placeholder-xl mb-1"></span>
      <span className="placeholder col-12 placeholder-lg"></span>
      <span className="placeholder col-12"></span>
      <span className="placeholder col-12 placeholder-sm"></span>
      <span className="placeholder col-12 placeholder-xs"></span>`,uo=`
<span className="placeholder col-12"></span>
      <span className="placeholder col-12 bg-primary"></span>
      <span className="placeholder col-12 bg-secondary"></span>
      <span className="placeholder col-12 bg-success"></span>
      <span className="placeholder col-12 bg-danger"></span>
      <span className="placeholder col-12 bg-warning"></span>
      <span className="placeholder col-12 bg-info"></span>
      <span className="placeholder col-12 bg-light"></span>
      <span className="placeholder col-12 bg-dark"></span>`,po=`
<span className="placeholder bg-primary col-6"></span>
      <span className="placeholder bg-primary w-75"></span>
      <span className="placeholder bg-primary" style={{width: 25}}></span>`,bo=`
export function Defaultlink() {
          const [show, setShow] = useState(false);
        
          const handleClose = () => setShow(false);
          const handleShow = () => setShow(true);
        
          return (
            <>
              <SpkButton variant="primary" onClick={handleShow}>
                Link with href
              </SpkButton>
        <SpkButton variant='primary' className="mb-1" type="button" onClick={handleShow}
            data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
         Button with data-bs-target
        </SpkButton>
        
        <Offcanvas show={show} onHide={handleClose} backdrop={true} 
        className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel">
        <Offcanvas.Header closeButton className="border-bottom border-block-end-dashed">
            <h5 className="offcanvas-title" id="offcanvasExampleLabel">Contacts</h5>
        </Offcanvas.Header>
        <Offcanvas.Body className="p-0">
        ......
        </Offcanvas.Body>
        </Offcanvas>
            </>
          );
        }`,yo=`
export function Defaultlink() {
          const [modals, setModals] = useState<{ [key: string]: boolean }>({});
              const handleModalOpen = (modalName: string) => {
                  setModals((prevModals) => ({ ...prevModals, [modalName]: true }));
              };
        
          return (
            <>
              <SpkButton variant="primary" onClick={handleShow}>
              Enable
              body scrolling
              </SpkButton>
        
        <Offcanvas show={show} onHide={handleClose1} backdrop={false} 
        className="offcanvas-start" data-bs-scroll="true"
        data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling"
        aria-labelledby="offcanvasScrollingLabel">
        <Offcanvas.Header closeButton className="border-bottom border-block-end-dashed">
         <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Contacts</h5>
              </Offcanvas.Header>
              <Offcanvas.Body className="p-0">
              ...........
              </Offcanvas.Body>
            </>
          );
        }`,fo=`
export function Defaultlink() {
          //static
          const [show, setShow] = useState(false);
          
          const handleClose2 = () => setShow(false);
          const handleShow = () => setShow(true);
          
            return (
              <>
          <SpkButton className="btn btn-primary" type="button"
          onClick={handleShow}> Toggle static offcanvas
          </SpkButton>
          <Offcanvas show={show} onHide={handleClose2} backdrop="static"
           className="offcanvas-start"  tabIndex={-1}
          id="staticBackdrop" aria-labelledby="staticBackdropLabel">
          <Offcanvas.Header closeButton className="border-bottom border-block-end-dashed">
              <h5 className="offcanvas-title" id="staticBackdropLabel">Contacts</h5>
          </Offcanvas.Header>
          <Offcanvas.Body className="p-0">
          ....
          </Offcanvas.Body>
          </Offcanvas>
              </>
            );
          }`,go=`
export function Defaultlink() {
          const [show, setShow] = useState(false);
        
          const handleClose3 = () => setShow(false);
          const handleShow = () => setShow(true);
        
          return (
            <>
        <SpkButton className="btn btn-primary" type="button" 
        onClick={handleShow}>Enable both scrolling &amp; 
        backdrop</SpkButton>
        
        <Offcanvas show={show} onHide={handleClose3} backdrop={true} 
        className="offcanvas-start" data-bs-scroll="true" tabIndex={-1}
        id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
        <Offcanvas.Header closeButton 
        className="border-bottom border-block-end-dashed">
        <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Contacts</h5>
        </Offcanvas.Header>
        <Offcanvas.Body className="p-0">
                                                  
                                                </Offcanvas.Body>
                                            </Offcanvas>
            </>
          );
        }`,vo=`
export function Defaultlink() {
          const [showb, setShowb] = useState(false);
          
          const handleCloseb = () => setShowb(false);
          const handleShowb = () => setShowb(true);
          
            return (
              <>
              <SpkButton className="btn btn-primary mb-1" type="button" 
               onClick={handleShowb}>Toggle bottom offcanvas</SpkButton>
               <Offcanvas placement='bottom' show={showb} onHide={handleCloseb}
                className="offcanvas-bottom" tabIndex="-1" id="offcanvasBottom"
               aria-labelledby="offcanvasBottomLabel">
               <Offcanvas.Header closeButton className="offcanvas-header">
           <h5 className="offcanvas-title" id="offcanvasBottomLabel">Offcanvas bottom
                   </h5>
               </Offcanvas.Header>
               <Offcanvas.Body className=" small">
                   ...
               </Offcanvas.Body>
           </Offcanvas>
              </>
            );
          }`;export{$,B as A,N as B,T as C,H as D,M as E,K as F,L as G,x as H,j as I,F as J,O as K,E as L,q as M,Y as N,V as O,G as P,z as Q,R,D as S,P as T,X as U,W as V,U as W,J as X,Z as Y,Q as Z,_,o as a,oo as a0,ao as a1,eo as a2,to as a3,so as a4,io as a5,co as a6,no as a7,lo as a8,ro as a9,fo as aa,bo as ab,yo as ac,go as ad,vo as ae,mo as af,ho as ag,uo as ah,po as ai,t as b,a as c,i as d,s as e,h as f,r as g,u as h,m as i,n as j,c as k,l,d as m,v as n,g as o,S as p,w as q,e as r,b as s,p as t,f as u,y as v,A as w,C as x,I as y,k as z};
