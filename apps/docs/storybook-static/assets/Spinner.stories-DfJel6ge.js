import{R as e}from"./iframe-BsBO42-d.js";import{a1 as a,C as E,h as N}from"./index-DjqJZFuD.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DyRqqCoN.js";import"./index-BpW9T3rN.js";const C={title:"Feedback/Spinner",component:a,tags:["autodocs"]},s={render:()=>e.createElement("div",{className:"flex items-center gap-4 text-primary-600"},e.createElement(a,{size:"sm"}),e.createElement(a,{size:"md"}),e.createElement(a,{size:"lg"}))},r={render:()=>{const[n,t]=e.useState(!1),i=()=>{t(!0),setTimeout(()=>{t(!1)},3e3)};return e.createElement("div",{className:"flex flex-col gap-4 items-start"},e.createElement(N,{onClick:i,disabled:n,className:"min-w-[120px]"},n?e.createElement("div",{className:"flex items-center gap-2"},e.createElement(a,{size:"sm"}),e.createElement("span",null,"Loading...")):"Submit"),e.createElement("p",{className:"text-sm text-neutral-600 dark:text-neutral-400"},"Click the button to see the loading state"))}},l={render:()=>{const[n,t]=e.useState(!0),[i,c]=e.useState(null);e.useEffect(()=>{const S=setTimeout(()=>{c("Your data has been loaded successfully!"),t(!1)},3e3);return()=>clearTimeout(S)},[]);const L=()=>{t(!0),c(null),setTimeout(()=>{c("Data refreshed at "+new Date().toLocaleTimeString()),t(!1)},1500)};return e.createElement(E,{className:"p-6 max-w-md"},e.createElement("h3",{className:"text-lg font-semibold mb-4"},"Dashboard Data"),n?e.createElement("div",{className:"flex flex-col items-center justify-center py-8 gap-3"},e.createElement(a,{size:"lg",className:"text-primary-600"}),e.createElement("p",{className:"text-sm text-neutral-600 dark:text-neutral-400"},"Fetching data...")):e.createElement("div",{className:"space-y-4"},e.createElement("p",{className:"text-neutral-700 dark:text-neutral-300"},i),e.createElement(N,{onClick:L,variant:"outline",size:"sm"},"Refresh Data")))}};var o,m,d;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => {
    return <div className="flex items-center gap-4 text-primary-600">
                <Spinner size="sm" />
                <Spinner size="md" />
                <Spinner size="lg" />
            </div>;
  }
}`,...(d=(m=s.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,p,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    const [isLoading, setIsLoading] = React.useState(false);
    const handleClick = () => {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    };
    return <div className="flex flex-col gap-4 items-start">
                <Button onClick={handleClick} disabled={isLoading} className="min-w-[120px]">
                    {isLoading ? <div className="flex items-center gap-2">
                            <Spinner size="sm" />
                            <span>Loading...</span>
                        </div> : "Submit"}
                </Button>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    Click the button to see the loading state
                </p>
            </div>;
  }
}`,...(g=(p=r.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var f,x,h;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [data, setData] = React.useState<string | null>(null);
    React.useEffect(() => {
      const timer = setTimeout(() => {
        setData("Your data has been loaded successfully!");
        setIsLoading(false);
      }, 3000);
      return () => clearTimeout(timer);
    }, []);
    const handleRefresh = () => {
      setIsLoading(true);
      setData(null);
      setTimeout(() => {
        setData("Data refreshed at " + new Date().toLocaleTimeString());
        setIsLoading(false);
      }, 1500);
    };
    return <Card className="p-6 max-w-md">
                <h3 className="text-lg font-semibold mb-4">Dashboard Data</h3>
                {isLoading ? <div className="flex flex-col items-center justify-center py-8 gap-3">
                        <Spinner size="lg" className="text-primary-600" />
                        <p className="text-sm text-neutral-600 dark:text-neutral-400">
                            Fetching data...
                        </p>
                    </div> : <div className="space-y-4">
                        <p className="text-neutral-700 dark:text-neutral-300">{data}</p>
                        <Button onClick={handleRefresh} variant="outline" size="sm">
                            Refresh Data
                        </Button>
                    </div>}
            </Card>;
  }
}`,...(h=(x=l.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};const y=["Sizes","LoadingButton","DataFetching"];export{l as DataFetching,r as LoadingButton,s as Sizes,y as __namedExportsOrder,C as default};
