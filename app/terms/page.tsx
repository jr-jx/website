import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageContainer } from "@/components/ui/PageContainer";

export default function TermsPage() {
  return (
    <PageContainer variant="default">
      <div className="py-16">
        <div className="container mx-auto px-6">
          {/* 页面标题 */}
          <div className="text-center mb-12">
            <Badge className="mb-4">服务条款</Badge>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">服务条款</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              请仔细阅读以下服务条款，使用我们的服务即表示您同意遵守这些条款。
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {/* 最后更新时间 */}
            <Card>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  <strong>最后更新时间：</strong>2025年10月8日
                </p>
              </CardContent>
            </Card>

            {/* 接受条款 */}
            <Card>
              <CardHeader>
                <CardTitle>1. 接受条款</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  通过访问或使用先锋计算机协会的网站和服务，您同意受本服务条款的约束。如果您不同意这些条款，请立即停止使用我们的网站和服务。
                </p>
                <p className="text-sm text-muted-foreground">
                  我们保留随时修改这些条款的权利。修改后的条款将在网站上公布，继续使用服务即表示您接受修改后的条款。
                </p>
              </CardContent>
            </Card>

            {/* 服务描述 */}
            <Card>
              <CardHeader>
                <CardTitle>2. 服务描述</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">先锋计算机协会提供以下服务：</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>技术学习和交流平台</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>技术文档和资源分享</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>技术活动和项目展示</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>成员招募和管理</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>技术博客和文章发布</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* 用户责任 */}
            <Card>
              <CardHeader>
                <CardTitle>3. 用户责任</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">使用我们的服务时，您同意：</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>提供真实、准确、完整的信息</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>遵守所有适用的法律法规</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>尊重其他用户的权利和隐私</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>不发布违法、有害、威胁、诽谤或不当内容</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>不进行任何可能损害网站安全的行为</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>不侵犯他人的知识产权</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* 禁止行为 */}
            <Card>
              <CardHeader>
                <CardTitle>4. 禁止行为</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">在使用我们的服务时，您不得：</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>上传或传播恶意软件、病毒或其他有害代码</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>尝试未经授权访问系统或数据</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>进行垃圾邮件发送或网络钓鱼活动</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>冒充他人或提供虚假身份信息</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>干扰或破坏服务的正常运行</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>进行任何商业活动或广告宣传</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* 知识产权 */}
            <Card>
              <CardHeader>
                <CardTitle>5. 知识产权</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">本网站及其内容受知识产权法保护：</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>网站设计、文本、图片、视频等内容归我们所有</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>用户上传的内容仍归用户所有，但授予我们使用许可</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>未经许可，不得复制、修改或分发我们的内容</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>尊重他人的知识产权，不得侵犯版权、商标等权利</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* 服务可用性 */}
            <Card>
              <CardHeader>
                <CardTitle>6. 服务可用性</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  我们努力保持服务的持续可用性，但不保证：
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>服务不会中断或出现错误</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>所有功能都能正常工作</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>数据传输不会丢失或损坏</span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground">
                  我们保留随时修改、暂停或终止服务的权利，恕不另行通知。
                </p>
              </CardContent>
            </Card>

            {/* 免责声明 */}
            <Card>
              <CardHeader>
                <CardTitle>7. 免责声明</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  在法律允许的最大范围内，我们不对以下情况承担责任：
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>服务中断、延迟或错误</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>数据丢失或损坏</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>第三方内容或链接</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>用户行为造成的任何损失</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>不可抗力因素导致的问题</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* 账户终止 */}
            <Card>
              <CardHeader>
                <CardTitle>8. 账户终止</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  我们保留在以下情况下终止或暂停您账户的权利：
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>违反本服务条款</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>提供虚假或误导性信息</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>从事违法或有害活动</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>长期不活跃或未使用服务</span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground">
                  账户终止后，您将无法访问相关服务，但我们可能保留某些信息用于法律或安全目的。
                </p>
              </CardContent>
            </Card>

            {/* 争议解决 */}
            <Card>
              <CardHeader>
                <CardTitle>9. 争议解决</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  因使用本服务而产生的任何争议，应通过以下方式解决：
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>首先通过友好协商解决</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>协商不成的，提交至有管辖权的法院</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>适用中华人民共和国法律</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* 联系我们 */}
            <Card>
              <CardHeader>
                <CardTitle>10. 联系我们</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  如果您对本服务条款有任何疑问，请通过以下方式联系我们：
                </p>
                <div className="space-y-2 text-sm">
                  <p>
                    <strong>邮箱：</strong>hi@jr-jx.cn
                  </p>
                  <p>
                    <strong>地址：</strong>江西省南昌市新建区江西软件职业技术大学
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">我们将在收到您的询问后尽快回复。</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
