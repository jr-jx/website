import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { AiOutlineGithub, AiOutlineMail, AiOutlineEnvironment } from "react-icons/ai";
import Image from "next/image";

const footerLinks = {
  navigation: [
    { href: "/about", label: "关于计协" },
    { href: "/join", label: "加入我们" },
  ],
  resources: [
    { href: "/blog", label: "博客" },
    { href: "/docs", label: "文档" },
    { href: "/events", label: "活动" },
  ],
  social: [
    {
      name: "GitHub",
      href: "https://github.com/jr-jx",
      icon: <AiOutlineGithub />,
    },
    {
      name: "邮箱",
      href: "mailto:hi@jr-jx.cn",
      icon: <AiOutlineMail />,
    },
  ],
  contact: [
    {
      label: "邮箱",
      value: "hi@jr-jx.cn",
      icon: <AiOutlineMail />,
    },
    {
      label: "地址",
      value: "江西省南昌市新建区江西软件职业技术大学",
      icon: <AiOutlineEnvironment />,
    },
  ],
};

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 网站信息 */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">{siteConfig.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {siteConfig.description}
              </p>
            </div>
            <div className="flex gap-3">
              {footerLinks.social.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  className="w-8 h-8 rounded-md bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* 导航链接 */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">导航</h4>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 资源链接 */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">资源</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 联系信息 */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">联系我们</h4>
            <ul className="space-y-3">
              {footerLinks.contact.map((contact) => (
                <li key={contact.label} className="flex items-start gap-2">
                  <div className="w-4 h-4 mt-0.5 text-muted-foreground flex-shrink-0">
                    {contact.icon}
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{contact.label}</p>
                    <p className="text-sm">{contact.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 底部版权信息 */}
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {siteConfig.name}. 保留所有权利。
            </p>
            {/* IC备案号 */}
            <a
              href="https://beian.miit.gov.cn/"
              target="_blank"
              className="cursor-pointer hover:text-foreground transition-colors text-sm text-muted-foreground flex items-center gap-1"
            >
              <Image
                src={"https://s3.qjqq.cn/47/68e533b1447e4.png!color"}
                alt="湘ICP备2025139501号-1"
                className="w-4 h-4"
                width={16}
                height={16}
              />
              湘ICP备2025139501号-1
            </a>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <Link href="/privacy" className="hover:text-foreground transition-colors">
                隐私政策
              </Link>
              <Link href="/terms" className="hover:text-foreground transition-colors">
                服务条款
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
